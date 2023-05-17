import React from "react";
import Alert from "@mui/material/Alert";

const ErrorComponent = () => {
  return (
    <>
      <Alert severity="error" className="vh-100">
        検索フォームに文字を入力してから検索してください。
      </Alert>
    </>
  );
};

export default ErrorComponent;
