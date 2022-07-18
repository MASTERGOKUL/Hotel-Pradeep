import CountUp from "react-countup";
import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const SpeedCount = () => {
const countStyle = {
  backgroundColor: "rgba(27, 42, 73,0.9)",
  height: 100,
  padding: 100,
  marginTop: 200,
  display:"flex",
  color:"white"
};
    return (
      <div style={countStyle}>
        {/*rooms */}
        <Box pl={34} pr={20}>
        <Typography variant="h3" pl={2.5}>
          <CountUp start={0} end={43} duration={4} />+
        </Typography>
        <Typography variant="h4">Rooms</Typography></Box>
        {/*hotels */}
        <Box pr={18}>
        <Typography variant="h3" pl={2.5}>
          <CountUp start={0} end={3} duration={4} />+
        </Typography>
        <Typography variant="h4">Hotels</Typography></Box>

        {/*restaurents */}
        <Box pr={15}>
        <Typography variant="h3"  pl={7}>
          <CountUp start={0} end={2} duration={4} />+
        </Typography>
        <Typography variant="h4">Restaurents</Typography></Box>
        {/*experience */}
        <Box pr={15}>
        <Typography variant="h3" pl={10}>
          <CountUp start={0} end={9} duration={4} />+
        </Typography>
        <Typography variant="h4">Years Exprience</Typography></Box>
      </div>
    );
    }
export default SpeedCount;