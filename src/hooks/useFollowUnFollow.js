import { useState } from "react";
import axios from "axios";
import { updateCall } from "../actionCalls";

export const useFollowUnfollow = () => {
  // フォローかフォロー外すかの変数
  const [isPushedFollowBtn, setIsPushedFollowBtn] = useState(false);

  // フォローする関数
  const handleFollow = async (targetUserId, currentUser, dispatch, setFn) => {
    try {
      await axios
        .put(`/users/${targetUserId}/follow`, {
          userId: currentUser._id,
        })
        .then((response) => {
          setFn(true);
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
        });
    } catch (err) {
      console.log(err);
    }
  };
  // フォローを外す関数
  const handleUnFollow = async (targetUserId, currentUser, dispatch, setFn) => {
    try {
      await axios
        .put(`/users/${targetUserId}/unfollow`, {
          userId: currentUser._id,
        })
        .then((response) => {
          setFn(false);
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
        });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    isPushedFollowBtn,
    setIsPushedFollowBtn,
    handleFollow,
    handleUnFollow,
  };
};
