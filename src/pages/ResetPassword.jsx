import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockResetIcon from "@mui/icons-material/LockReset";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";
import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { AuthContext } from "../state/AuthContext";

const theme = createTheme();

const ResetPassword = () => {
  // context
  const { user } = React.useContext(AuthContext);
  //navigateのインスタンス化
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [pushBtn, setPushBtn] = React.useState(false);
  const [secretQuestion, setSecretQuestion] = React.useState("");
  const [isAnswer, setIsAnswer] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showReviewPassword, setShowReviewPassword] = React.useState(false);

  // ref
  const username = React.useRef();
  const password = React.useRef();
  const reviewPassword = React.useRef();
  const secretAnswer = React.useRef();

  // ボタンがクリックできるかどうか
  const handleChangePushBtn = () => {
    if (
      password.current.value === reviewPassword.current.value &&
      username.current.value &&
      password.current.value &&
      reviewPassword.current.value &&
      secretQuestion &&
      secretAnswer.current.value
    ) {
      setPushBtn(true);
    } else {
      setPushBtn(false);
    }
  };

  // パスワード確認
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowReviewPassword = () =>
    setShowReviewPassword((showReview) => !showReview);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // 秘密の質問
  const handleChangeSecretQuestion = (event) => {
    setSecretQuestion(event.target.value);
    // 選択したら質問の答えのフォームが解禁
    setIsAnswer(true);
  };

  // 送信処理
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value,
      secretQuestion: secretQuestion,
      secretAnswer: secretAnswer.current.value,
    };

    try {
      await axios.put("/auth/reset/password", user);
      navigate("/signIn", { state: "completed" });
    } catch (err) {
      setErrorMsg(err.response.data);
      setIsError(true);
    }
  };

  return (
    <div className="reset_password">
      <Header />

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="my-5"
          >
            <Avatar sx={{ m: 1, bgcolor: "error.main" }}>
              <LockResetIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              パスワード再設定
            </Typography>
            <Grid item xs={12} sx={{ mt: 3, mb: 1 }}>
              <Box
                component="ul"
                sx={{
                  p: 0,
                  m: 0,
                  textAlign: "start",
                  fontSize: "18px",
                  color: "error.main",
                }}
              >
                ご登録いただいている
                <li className="ms-3">ユーザーネーム</li>
                <li className="ms-3">秘密の質問</li>
                <li className="ms-3">質問の答え</li>
                を入力してください。
              </Box>
            </Grid>
            <Box
              component="form"
              action="POST"
              noValidate
              onSubmit={(e) => handleSubmit(e)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="true"
                    name="userName"
                    required
                    fullWidth
                    id="userName"
                    label="ユーザーネーム"
                    autoFocus
                    inputRef={username}
                    onChange={() => handleChangePushBtn()}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" required>
                      秘密の質問
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={secretQuestion}
                      label="secretQuestion"
                      onChange={(e) => handleChangeSecretQuestion(e)}
                    >
                      <MenuItem value="両親が出会った街は?">
                        両親が出会った街は?
                      </MenuItem>
                      <MenuItem value="小学校3年生のときの担任の先生の名字は?">
                        小学校3年生のときの担任の先生の名字は?
                      </MenuItem>
                      <MenuItem value="子供の頃によく遊んだ公園の名前は?">
                        子供の頃によく遊んだ公園の名前は?
                      </MenuItem>
                      <MenuItem value="好きな映画は?">好きな映画は?</MenuItem>
                      <MenuItem value="好きな有名人は?">
                        好きな有名人は?
                      </MenuItem>
                      <MenuItem value="好きなスポーツは?">
                        好きなスポーツは?
                      </MenuItem>
                      <MenuItem value="最初に飼ったペットの名前は?">
                        最初に飼ったペットの名前は?
                      </MenuItem>
                      <MenuItem value="最初に訪れた国は?">
                        最初に訪れた国は?
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    disabled={!isAnswer}
                    required
                    fullWidth
                    name="answer"
                    label="質問の答え"
                    type="text"
                    id="text"
                    autoComplete="true"
                    inputRef={secretAnswer}
                    onChange={() => handleChangePushBtn()}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} sx={{ mt: 3, mb: 1 }}>
                <Box component="p" sx={{ m: 0, textAlign: "center" }}>
                  新しく設定するパスワード
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="true"
                  InputProps={{
                    minLength: 3,
                    maxLength: 50,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowPassword()}
                          onMouseDown={(e) => handleMouseDownPassword(e)}
                          edge="end"
                        >
                          {!showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  inputRef={password}
                  onChange={() => handleChangePushBtn()}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="review-password"
                  label="パスワード再確認"
                  type={showReviewPassword ? "text" : "password"}
                  id="review-password"
                  autoComplete="true"
                  InputProps={{
                    minLength: 3,
                    maxLength: 50,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowReviewPassword()}
                          onMouseDown={(e) => handleMouseDownPassword(e)}
                          edge="end"
                        >
                          {!showReviewPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  inputRef={reviewPassword}
                  onChange={() => handleChangePushBtn()}
                />
              </Grid>

              {/* エラーが帰ってきたら */}
              {isError ? (
                <Alert severity="error" className="mt-2">
                  {errorMsg}
                </Alert>
              ) : (
                <></>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!pushBtn}
              >
                新しいパスワードを設定する
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {user ? (
                    <Tooltip title="ホームへ戻る" className="text-primary">
                      <Button onClick={() => navigate("/signIn")}>
                        ホームへ戻る
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      title="ログインページへ戻る"
                      className="text-primary"
                    >
                      <Button onClick={() => navigate("/signIn")}>
                        ログインページへ戻る
                      </Button>
                    </Tooltip>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <Footer />
    </div>
  );
};

export default ResetPassword;
