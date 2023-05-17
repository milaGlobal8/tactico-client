import React from "react";
import { Box, Typography } from "@mui/material";

export default function NoMyPosts() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography variant="p" style={{ color: "#208fff" }} className="mb-4">
        まだ投稿がありません。
        <br />
        This user has not posted yet.
      </Typography>
    </Box>
  );
}
