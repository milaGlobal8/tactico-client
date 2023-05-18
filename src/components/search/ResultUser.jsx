import React from "react";
import { Avatar, Button, Typography } from "@mui/material";
import sampleIconImg from "../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";

const ResultUser = ({ users }) => {
  //navigateのインスタンス化
  const navigate = useNavigate();

  return (
    <>
      {/* 検索結果 */}
      <div className="list-form-group">
        {/* {map関数getメソッドで一括取得} */}
        {users.map((user) => (
          <div
            key={user._id}
            className="userInfoBox container-fluid border border-dark p-0 m-0 h-25"
          >
            {/* ユーザー情報 */}
            <Button
              variant="text"
              className="col-12 d-flex gap-3"
              onClick={() =>
                navigate(`/profile/${user.username}`, { state: user })
              }
            >
              <Avatar
                alt="sample"
                src={
                  user.profilePicture
                    ? process.env.REACT_APP_API_URL +
                      `/users/profilePicture/${user.profilePicture}`
                    : sampleIconImg
                }
                className="border border-dark m-0"
                sx={{
                  width: 75,
                  height: 75,
                  cursor: "pointer",
                }}
              />
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                textTransform="none"
              >
                {user.username}
              </Typography>
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResultUser;
