import React, { memo, useState, useContext, useEffect } from "react";
import EachComment from "./EachComment";
import { Box, TextField, Button } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { useComment } from "../../../hooks/useComment";
import { AuthContext } from "../../../state/AuthContext";
import axios from "axios";

const Comments = memo(({ postId }) => {
  // context
  const { user } = useContext(AuthContext);
  // state
  const [done, setDone] = useState("");
  const [updatedComments, setUpdatedComments] = useState("");
  // hooks
  const {
    isVisible,
    setIsVisible,
    comment,
    setComment,
    commentGroup,
    setCommentGroup,
    fetchCommentGroup,
    handleChangeComment,
    handleSubmit,
  } = useComment();

  // 流れてきたコメントID配列を使ってコメント自体を取得してくる & ユーザーがいたら(ログイン済みなら)表示
  useEffect(() => {
    fetchCommentGroup(postId, setCommentGroup);
    if (user) {
      setIsVisible(true);
    } else {
      return;
    }
  }, []);

  const handleComment = (e, userId, postId, comment, setDone) => {
    handleSubmit(e, userId, postId, comment, setDone);
  };

  // コメントされたらコメント数を更新
  useEffect(() => {
    const fetchComments = async (req, res) => {
      const response = await axios.get(`/comments/${postId}`);
      setUpdatedComments(response.data);
    };
    fetchComments();
  }, [done]);

  return (
    <div style={{ padding: 14 }}>
      <div className="comment_num_add_comment_box d-flex flex-column w-100">
        <h1>コメント数: {updatedComments.length}</h1>

        {/* コメントアイコン */}
        {isVisible ? (
          <div className="d-flex justify-content-end">
            <MessageIcon
              color="primary"
              fontSize="large"
              sx={{ marginTop: 2 }}
            />
          </div>
        ) : (
          <></>
        )}

        {/* コメントフォーム ログインしている人にしか表示されない */}
        {isVisible ? (
          <Box component="form" action="POST" className="comment_form_box">
            <TextField
              className="comment_form w-100"
              id="standard-multiline-flexible"
              label="コメントする..."
              multiline
              maxRows={10}
              variant="standard"
              value={comment}
              onChange={(e) => handleChangeComment(e.target.value)}
            />
            <Box className="btn_box mt-2 hstack gap-2 mb-5 d-flex justify-content-end">
              <Button
                variant="text"
                className="text-dark rounded-pill"
                onClick={() => setComment("")}
              >
                キャンセル
              </Button>
              <Button
                variant="contained"
                className="rounded-pill"
                disabled={!comment}
                onClick={(e) =>
                  handleComment(e, user._id, postId, comment, setDone)
                }
              >
                コメント
              </Button>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </div>
      {commentGroup.map((comment) => (
        <EachComment key={comment._id} comment={comment} postId={postId} />
      ))}
    </div>
  );
});

export default Comments;
