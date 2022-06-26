import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Headerimg = () => {
  {
    /*back ground image */
  }
  const bgimg = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("data:image/jpeg;base64,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")`;
  return (
    
    <Box
      sx={{
        height: "950px",
        backgroundImage: bgimg,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
      
      }}
    >
      {/*header paragrap */}
      <Box >
      <Typography variant="h1" align="center">
      Hotel Pradeep</Typography>
      <br />
      <Typography variant="h3" align="center" width={1500}>
      Life moves an unrushed pace at the Pradeep Hotels open year-round your Home away from Home.
      </Typography>
      </Box>
    </Box>
  );
};
export default Headerimg;
