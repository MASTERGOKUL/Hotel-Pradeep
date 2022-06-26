import { Fade, Slide } from "react-reveal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import "./about.css";
export default function AboutUs() {
  return (
    <Box className="aboutus">
      <div className="card aboutcard" sx={{ width: 200 }} align="center">
        <Slide left duration={1500}>
          {/*heading above line*/}
          <Typography variant="h3">About Us</Typography>
        </Slide>

        {/*horizontal line*/}
        <Slide right duration={2000}>
          <div className="card-bordera"></div>
        </Slide>
      </div>

      {/*descriptioin right side line*/}
      <Fade right duration={1000}>
        <img
          className="aboutimage"
          src="https://th.bing.com/th/id/OIP.DLCv8MNcKK46kqwJxzaV3QHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7"
        ></img>
        <Typography
          width="680px"
          variant="h4"
          align="center"
          sx={{ position: "absolute", left: 1000, top: 100 }}
        >
          <b>Pradeep hotels</b> are your luxurious oasis away from your home, as a
          friendly and well trained staff believes in expansion of our family,
          as every guest values Us, for we care. Boasting an inventory of <b>85+
          rooms </b>in the city, we at Pradeep Hotels aim at catering to our guests
          in the best possible way, and serve you with the best.
        </Typography>
      </Fade>
      {/*vertical line*/}

      <Box item sx={{ paddingLeft: 115 }}>
        <Fade duration={2500}>
          <Slide left duration={1000}>
            <div className="vla"></div>
          </Slide>
        </Fade>
      </Box>
    </Box>
  );
}
