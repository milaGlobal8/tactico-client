import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function AxiosLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "70px",
      }}
    >
      <p className="text-primary">取得まで30秒ほどかかる場合がございます</p>
      <CircularProgress />
    </Box>
  );
}
