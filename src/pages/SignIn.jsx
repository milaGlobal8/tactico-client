import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { loginCall } from "./../actionCalls";
import { AuthContext } from "./../state/AuthContext";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Tooltip } from "@mui/material";

const theme = createTheme();

export default function SignIn() {
  // location.stateのstate
  const [registerCompleted, setRegisterCompleted] = React.useState("");
  //navigateのインスタンス化
  const navigate = useNavigate();
  // location
  const location = useLocation();
  // 新規登録してからログインページへ来た場合に設定する
  React.useEffect(() => {
    setRegisterCompleted(location.state);
  }, [location.state]);

  // context
  const { dispatch, error } = React.useContext(AuthContext);

  const [pushBtn, setPushBtn] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  // ref
  const username = React.useRef();
  const password = React.useRef();

  // パスワード確認
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // ボタンがクリックできるかどうか
  const handleChangePushBtn = () => {
    if (username.current.value && password.current.value) {
      setPushBtn(true);
    } else {
      setPushBtn(false);
    }
  };

  // 送信処理
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      loginCall(
        {
          username: username.current.value,
          password: password.current.value,
        },
        dispatch
      );
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
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
              minHeight: "100vh",
            }}
            className="signIn_container my-5"
          >
            {registerCompleted ? (
              <Alert severity="success" sx={{ mb: 1 }}>
                登録に成功しました！
              </Alert>
            ) : (
              ""
            )}
            <Avatar sx={{ m: 1, bgcolor: "info.main" }}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ログイン
            </Typography>
            {/* ログイン前の注意事項 */}
            <Alert severity="info" sx={{ my: 1 }}>
              ログインされた方のみ、
              <br />
              投稿・検索・プロフィールの閲覧ができます。
            </Alert>
            <Box
              component="form"
              onSubmit={(e) => handleSubmit(e)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="ユーザーネーム"
                name="username"
                autoComplete="true"
                autoFocus
                inputRef={username}
                onChange={() => handleChangePushBtn()}
              />
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
                minLength="6"
                maxLength="50"
                inputRef={password}
                onChange={() => handleChangePushBtn()}
              />

              {/* エラーが帰ってきたら */}
              {error ? (
                <Alert severity="error" className="mt-2">
                  {error.response.data}
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
                ログイン
              </Button>
              <Grid container>
                <Grid item xs>
                  <Tooltip title="パスワード再設定" className="text-primary">
                    <Button onClick={() => navigate("/reset-password")}>
                      パスワード再設定
                    </Button>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip
                    title="新規登録ページはこちら"
                    className="text-primary"
                  >
                    <Button onClick={() => navigate("/signUp")}>
                      新規登録ページはこちら
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <Footer />
    </div>
  );
}
