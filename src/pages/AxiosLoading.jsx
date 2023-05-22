import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function AxiosLoading({ loadingMsg }) {
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
      <p className="text-primary">{loadingMsg}</p>
      <CircularProgress />
    </Box>
  );
}
