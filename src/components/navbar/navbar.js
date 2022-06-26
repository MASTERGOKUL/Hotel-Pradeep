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
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./drawer";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  // name of navbar sections or pages
  const pages = [
    "Our Hotels",
    "experiences",
    "Wedding",
    "ABoutUs",
    "ContactUs",
  ];

  // change color of nav while scrolling
  const [color, setColor] = useState("#00000000");
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor("#000");
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

          <AddBusinessRoundedIcon
            sx={{
              transform: "scale(2)",
              position: "static",
              paddingLeft: "5%",
            }}
          />

          {isMatch ? (
            <>
              {/* navbar Name*/}
              <Typography sx={{ fontSize: "2rem", paddingLeft: "6%" }}>
                Hotel pradeep
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              {/* navbar Name*/}
              <Typography sx={{ fontSize: "2rem", paddingLeft: "6%" }}>
                Hotel pradeep
              </Typography>

              <Tabs
                sx={{ marginLeft: "auto", position: "relative", left: 200 }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {/* navbar pages or sectioins element*/}
                {pages.map((page, index) => (
                  
                  <Tab key={index} label={page} sx={{ fontSize: "1.1rem" }} />
                ))}
              </Tabs>
              {/* login button*/}
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              {/* signup button*/}
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
