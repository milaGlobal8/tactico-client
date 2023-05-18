import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../state/AuthContext";
import { useComment } from "../../../hooks/useComment";

const ReplyForm = ({
  postId,
  isPushedReply,
  setIsPushedReply,
  commentUsername,
}) => {
  // hooks
  const { handleSubmit } = useComment();

  // state
  const [reply, setReply] = useState("");

  const { user } = useContext(AuthContext);

  // 値の監視
  const handleChangeReply = (value) => {
    setReply(value);
  };

  const handleReply = (e, userId, username, postId, comment) => {
    handleSubmit(e, userId, username, postId, comment);
  };

  return (
    <>
      <Box component="form" action="POST" className="reply_form_box w-100">
        <TextField
          className="reply_form w-100"
          id="standard-multiline-flexible"
          label="返信を追加..."
          defaultValue={">>" + commentUsername + reply}
          multiline
          maxRows={10}
          variant="standard"
          onChange={(e) => handleChangeReply(e.target.value)}
        />
        <Box className="btn_box mt-2 gap-2 mb-5 d-flex justify-content-end">
          <Button
            variant="text"
            className="text-dark rounded-pill"
            onClick={() => setIsPushedReply(!isPushedReply)}
          >
            キャンセル
          </Button>
          <Button
            variant="contained"
            className="rounded-pill"
            disabled={!reply}
            onClick={(e) =>
              handleReply(e, user._id, user.username, postId, reply)
            }
          >
            返信
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ReplyForm;
