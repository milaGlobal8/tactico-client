import * as React from "react";
import { Avatar } from "@mui/material";
import sampleIconImg from "../../images/sampleIcon.png";
import { Tooltip, Button, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useFollowUnfollow } from "../../hooks/useFollowUnFollow";
import { AuthContext } from "./../../state/AuthContext";
import axios from "axios";

export default function ViewAnotherUserInfo({ user }) {
  // 他のユーザーの情報を格納する変数
  const [anotherUser, setAnotherUser] = React.useState("");
  // 自分の情報
  const { user: currentUser, dispatch } = React.useContext(AuthContext);

  // useEffect
  // 他のユーザーの情報を取得してくる
  React.useEffect(() => {
    const fetchAnotherUser = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/users/${user.userId}`
      );
      setAnotherUser(response.data);
    };
    fetchAnotherUser();
  }, []);

  // 自分が見ているユーザーをフォローしたら見ているユーザーページのフォロワー数を更新する
  React.useEffect(() => {
    const fetchAnotherUser = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/users/${user.userId}`
      );
      setAnotherUser(response.data);
    };
    fetchAnotherUser();
  }, [currentUser.followings.includes(anotherUser._id)]);

  // 自分が見ているユーザーのフォローを解除したら見ているユーザーページのフォロワー数を更新する
  React.useEffect(() => {
    const fetchAnotherUser = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/users/${user.userId}`
      );
      setAnotherUser(response.data);
    };
    fetchAnotherUser();
  }, [!currentUser.followings.includes(anotherUser._id)]);

  // フォローしているかどうか
  const [isFollowing, setIsFollowing] = React.useState(
    currentUser.followings.includes(user.userId)
  );

  // フォロー関連の関数
  const { handleFollow, handleUnFollow } = useFollowUnfollow();

  return (
    <Card sx={{ maxWidth: "100%", borderRadius: 0 }}>
      <CardContent>
        <Box
          className="another_user_top_img_&_follow_btn"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Avatar
            alt="anotherUser_profilePictures"
            src={
              anotherUser.profilePicture
                ? process.env.REACT_APP_API_URL +
                  `/users/profilePicture/${anotherUser.profilePicture}`
                : sampleIconImg
            }
            className="another_user_top_img border border-dark"
            sx={{
              width: 75,
              height: 75,
            }}
          />
          {/* 他ユーザーなら以下を表示 */}
          {isFollowing ? (
            <Tooltip title="フォローをはずす">
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#208fff",
                  color: "white",
                  width: "140px",
                  height: "40px",
                  padding: 0,
                }}
                onClick={() =>
                  handleUnFollow(
                    anotherUser._id,
                    currentUser,
                    dispatch,
                    setIsFollowing
                  )
                }
              >
                フォロー中
              </Button>
            </Tooltip>
          ) : (
            <Tooltip title="フォローする">
              <Button
                variant="outlined"
                onClick={() =>
                  handleFollow(
                    anotherUser._id,
                    currentUser,
                    dispatch,
                    setIsFollowing
                  )
                }
                sx={{ width: "140px", height: "40px", padding: 0 }}
              >
                フォローする
              </Button>
            </Tooltip>
          )}
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="another_username"
        >
          {anotherUser.username}
        </Typography>

        <Box
          component="div"
          sx={{ display: "flex" }}
          className="follow_follower gap-2"
        >
          <Tooltip title="フォロー中">
            <Typography variant="body2" color="text.secondary">
              {anotherUser ? anotherUser.followings.length : "取得中..."}
              フォロー中
            </Typography>
          </Tooltip>
          <Tooltip title="フォロワー">
            <Typography variant="body2" color="text.secondary">
              {anotherUser ? anotherUser.followers.length : "取得中..."}
              フォロワー
            </Typography>
          </Tooltip>
        </Box>

        <Typography
          className="another_user_desc"
          variant="body2"
          color="text.secondary"
          sx={{ margin: "10px 0" }}
        >
          {anotherUser.desc ? anotherUser.desc : "自己紹介をしてみよう！"}
        </Typography>
      </CardContent>
    </Card>
  );
}
