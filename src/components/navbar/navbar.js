import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import DrawerComp from "./drawer";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  // name of navbar sections or pages
  const links=["#ourhotels",
  "#gallery",
  "#",
  "#aboutUs",
  "#contactUs"];

  const pages = [
    "Our Hotels",
    "Gallery",
    "Wedding",
    "ABoutUs",
    "ContactUs"];
  // change color of nav while scrolling
  const [color, setColor] = useState("#00000000");
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor("#1b2a49");
    } else {
      setColor("#00000000");
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <React.Fragment>
      <AppBar sx={{ background: color }}>
        <Toolbar>
          {/* icon*/}

          <Box component="img" src={require("../../assets/PradeepLogo.jpg")}   sx={{
            height: "50px",
              position: "static",
              paddingLeft: "5%",
            }} />


          {isMatch ? (
            <>
              {/* navbar Name*/}
              <Typography sx={{ fontSize: "2rem", paddingLeft: "2%" }}>
                Hotel pradeep
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              {/* navbar Name*/}
              <Typography sx={{ fontSize: "2rem", paddingLeft: "2%" }}>
                Hotel pradeep
              </Typography>

              <Tabs
                sx={{ marginLeft: "auto", position: "relative", right: 10 }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {/* navbar pages or sectioins element*/}
                {pages.map((pages, index) => (
                 
                  <Tab  label={pages} sx={{ fontSize: "1.1rem" }} href={links[index]}></Tab>
                ))}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
