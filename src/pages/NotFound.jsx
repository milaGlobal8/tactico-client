import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const primary = purple[500]; // #f44336

export default function NotFound() {
  const navigate = useNavigate();
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
        お探しのページは見つかりませんでした。
        <br />
        The page you’re looking for doesn’t exist.
      </Typography>
      <div className="btn_box d-flex justify-content-around align-items-center gap-4">
        <Button variant="contained" onClick={() => navigate("/")}>
          HOMEに戻る
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate("/inquiry")}
        >
          不具合を報告する
        </Button>
      </div>
    </Box>
  );
}
