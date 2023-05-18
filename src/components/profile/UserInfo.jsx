import * as React from "react";
import { Tooltip, IconButton, Avatar, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import sampleIconImg from "../../images/sampleIcon.png";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "./../../state/AuthContext";
import { logoutCall } from "../../actionCalls";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  // context
  const { user, dispatch } = React.useContext(AuthContext);

  // navigate
  const navigate = useNavigate();

  // ログアウト
  const handleLogout = () => {
    try {
      logoutCall(
        {
          _id: user._id,
          username: user.username,
        },
        dispatch
      );
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Card className="profile_card" sx={{ maxWidth: "100%", borderRadius: 0 }}>
      <CardContent>
        <Box
          className="my_profilePicture_&_etc_buttons"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Avatar
            alt="my_profilePicture"
            src={
              user.profilePicture
                ? process.env.REACT_APP_API_URL +
                  `/users/profilePicture/${user.profilePicture}`
                : sampleIconImg
            }
            className="my_profilePicture border border-dark"
            sx={{
              width: 75,
              height: 75,
            }}
          />

          <Box className="edit_logout_btn container-fluid d-flex justify-content-end align-items-start p-0 gap-2">
            <Tooltip title="プロフィールを編集">
              <IconButton
                onClick={() => navigate(`/profile/${user.username}/edit`)}
              >
                <EditIcon sx={{ color: "#1976d2" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="ログアウト">
              <IconButton onClick={() => handleLogout()}>
                <LogoutIcon sx={{ color: "#1976d2" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="another_username"
        >
          {user.username}
        </Typography>

        <Box
          component="div"
          sx={{ display: "flex" }}
          className="follow_follower gap-2"
        >
          <Tooltip title="フォロー中">
            <Typography variant="body2" color="text.secondary">
              {user.followings.length} フォロー中
            </Typography>
          </Tooltip>
          <Tooltip title="フォロワー">
            <Typography variant="body2" color="text.secondary">
              {user.followers.length} フォロワー
            </Typography>
          </Tooltip>
        </Box>

        <Typography
          className="another_user_desc"
          variant="body2"
          color="text.secondary"
          sx={{ margin: "10px 0" }}
        >
          {user.desc ? user.desc : "自己紹介をしてみよう！"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
