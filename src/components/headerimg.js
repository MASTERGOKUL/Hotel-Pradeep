import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Headerimg = () => {
  {
    /*back ground image */
  }
  const bgimg = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18K78VtzEgcvs9Je-5Huhs2lIpBbkfPiA5Q&usqp=CAU")`;
  return (
    
    <Box
      sx={{
        height: "950px",
        backgroundImage: bgimg,
        backgroundAttachment: "fixed",
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
      Life moves an unrushed pace at the Pradeep Hotels open year-round Your Home away from Home.
      </Typography>
      </Box>
    </Box>
  );
};
export default Headerimg;
