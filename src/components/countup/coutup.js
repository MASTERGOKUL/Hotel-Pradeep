import CountUp from "react-countup";
import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./countup.css";
const SpeedCount = () => {

    return (
      <div className="count">
        {/* <Typography sx={{position:"absolute",marginBottom:100}}>Hotel Pradeep Palace Provide stars facility unique Hotel, conveniently located in the heart of the City and Centre of all tourist interest.</Typography> */}
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