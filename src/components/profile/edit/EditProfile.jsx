import {
  Avatar,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  TextField,
  Alert,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { updateCall } from "../../../actionCalls";
import { AuthContext } from "../../../state/AuthContext";
import axios from "axios";
import sampleIcon from "../../../images/sampleIcon.png";
import CropIcon from "@mui/icons-material/Crop";
import { useNavigate } from "react-router-dom";
import CropEasy from "../../crop/CropEasy";

const EditProfile = () => {
  const navigate = useNavigate();

  // 編集ローディング
  const [isEditLoading, setIsEditLoading] = useState(false);

  // context
  const { user, dispatch } = useContext(AuthContext);
  // state
  const [desc, setDesc] = useState(user?.desc);
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);
  // file・・・新しく設定する画像(画像を直接格納)
  const [file, setFile] = useState(user.profilePicture);
  // photoURL・・・以前設定した画像(画像を直接格納)
  const [photoURL, setPhotoURL] = useState(
    user.profilePicture
      ? process.env.REACT_APP_API_URL +
          `/users/profilePicture/${user.profilePicture}`
      : ""
  );
  // 切り抜きページ
  const [openCrop, setOpenCrop] = useState(false);

  // 関数
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };

  const postImage = async ({ image }) => {
    const formData = new FormData();
    formData.append("profilePicture", image);

    const result = await axios.post(
      process.env.REACT_APP_API_URL + "/users/profilePicture",
      formData
    );
    return result.data;
  };

  // 送信する
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsEditLoading(true);
      // 画像に変更がなかったら
      if (file === user.profilePicture) {
        const updatedInfo = {
          userId: user._id,
          desc: desc,
          profilePicture: user.profilePicture,
        };
        await axios
          .put(
            process.env.REACT_APP_API_URL + `/users/${user._id}`,
            updatedInfo
          )
          .then((response) => {
            // 更新するデータ
            let data = {
              desc: response.data.desc,
              _id: response.data._id,
              username: response.data.username,
              profilePicture: response.data.profilePicture,
              coverPicture: response.data.coverPicture,
              followers: response.data.followers,
              followings: response.data.followings,
              isAdmin: response.data.isAdmin,
              createdAt: response.data.createdAt,
              __v: response.data.__v,
            };
            updateCall(data, dispatch);
          })
          .then(() => {
            setIsEditLoading(false);
          })
          .catch((err) => {
            setErrorMsg(err.response.data);
            setIsError(true);
          })
          .finally(() => {
            navigate("/profile");
          });
        // 画像に変更があったら
      } else if (file !== user.profilePicture) {
        // ➀画像未設定 & 画像を初めて設定
        if (!user.profilePicture && file) {
          const updatedInfo = {
            userId: user._id,
            desc: desc,
            profilePicture: file,
          };
          // 画像をS3に保存
          const result = await postImage({ image: file });
          // S3に保存したら一意のURLを更新情報のプロパティに代入
          updatedInfo.profilePicture = result.imagePath;

          // 投稿のユーザー情報も変更
          await axios
            .put(
              process.env.REACT_APP_API_URL + `/posts/${user._id}`,
              updatedInfo
            )
            .catch((err) => {
              console.log(err.response.data);
              navigate("*");
            });

          // 画像をS3に保存してからデータベースへ送信
          await axios
            .put(
              process.env.REACT_APP_API_URL + `/users/${user._id}`,
              updatedInfo
            )
            .then((response) => {
              // 更新するデータ
              let data = {
                desc: response.data.desc,
                _id: response.data._id,
                username: response.data.username,
                profilePicture: response.data.profilePicture,
                coverPicture: response.data.coverPicture,
                followers: response.data.followers,
                followings: response.data.followings,
                isAdmin: response.data.isAdmin,
                createdAt: response.data.createdAt,
                __v: response.data.__v,
              };
              updateCall(data, dispatch);
            })
            .then(() => {
              setIsEditLoading(false);
            })
            .then(() => {
              navigate("/profile");
            })
            .catch((err) => {
              setErrorMsg(err.response.data);
              setIsError(true);
            });
          // ➁画像設定済み & 画像を変更
        } else if (user.profilePicture && file) {
          const updatedInfo = {
            userId: user._id,
            desc: desc,
            profilePicture: file,
          };

          // 前の画像をS3から削除する
          await axios
            .delete(
              process.env.REACT_APP_API_URL +
                `/users/profilePicture/delete/${user.profilePicture}`
            )
            .catch((err) => console.log(err));
          // 画像をS3に保存
          const result = await postImage({ image: file });
          // S3に保存したら一意のURLを更新情報のプロパティに代入
          updatedInfo.profilePicture = result.imagePath;

          // 投稿のユーザー情報も変更
          await axios
            .put(
              process.env.REACT_APP_API_URL + `/posts/${user._id}`,
              updatedInfo
            )
            .catch((err) => {
              console.log(err.response.data);
              navigate("*");
            });

          // 画像をS3に保存してからデータベースへ送信
          await axios
            .put(
              process.env.REACT_APP_API_URL + `/users/${user._id}`,
              updatedInfo
            )
            .then((response) => {
              // 更新するデータ
              let data = {
                desc: response.data.desc,
                _id: response.data._id,
                username: response.data.username,
                profilePicture: response.data.profilePicture,
                coverPicture: response.data.coverPicture,
                followers: response.data.followers,
                followings: response.data.followings,
                isAdmin: response.data.isAdmin,
                createdAt: response.data.createdAt,
                __v: response.data.__v,
              };
              updateCall(data, dispatch);
            })
            .then(() => {
              setIsEditLoading(false);
            })
            .then(() => {
              navigate("/profile");
            })
            .catch((err) => {
              setErrorMsg(err.response.data);
              setIsError(true);
            });
        }
      }
    } catch (err) {
      setErrorMsg(err.response.data);
      setIsError(true);
    }
  };

  return !openCrop ? (
    <>
      {isEditLoading ? (
        <AxiosLoading loadingMsg="編集中です" />
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <DialogContent dividers>
            <DialogContentText sx={{ fontSize: "medium" }}>
              プロフィール設定
            </DialogContentText>
            <hr className="mt-1" />
            <Box
              className="user_profile_picture"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <label htmlFor="profilePicture">
                <input
                  accept="image/*"
                  id="profilePicture"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleChangeFile}
                />
                <Avatar
                  className="user_profilePicture border border-dark"
                  src={photoURL ? photoURL : sampleIcon}
                  sx={{
                    width: 75,
                    height: 75,
                    cursor: "pointer",
                  }}
                />
              </label>
              {photoURL && (
                <IconButton
                  aria-label="Crop"
                  color="primary"
                  onClick={() => setOpenCrop(true)}
                >
                  <CropIcon />
                </IconButton>
              )}
            </Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="another_username"
            >
              {user.username}
            </Typography>
            <TextField
              label="自己紹介"
              autoFocus
              id="standard-multiline-flexible"
              margin="normal"
              type="text"
              inputProps={{ minLength: 2 }}
              fullWidth
              multiline
              maxRows={10}
              variant="standard"
              value={desc || ""}
              required
              onChange={(e) => setDesc(e.target.value)}
            />
          </DialogContent>
          {/* エラーが帰ってきたら */}
          {isError ? (
            <Alert severity="error" className="mt-2">
              {errorMsg}
            </Alert>
          ) : (
            <></>
          )}
          <DialogActions>
            <Button
              className="edit_btn"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
            >
              編集する
            </Button>
          </DialogActions>
        </form>
      )}
    </>
  ) : (
    <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />
  );
};

export default EditProfile;
