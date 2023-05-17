import React from "react";
import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const primary = purple[500]; // #f44336

const NotResult = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="p" style={{ color: "white" }} className="mb-4">
        お探しの投稿・ユーザーは見つかりませんでした。
        <br />
        The post / user you’re looking for doesn’t exist.
      </Typography>
    </Box>
  );
};

export default NotResult;
