/*import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header =()=>{
  return(
<>
<AppBar position="static" display="felx">
   <Toolbar>
    <Typography variant="h6" color='inherit'  sx={{flexGrow:0.8}}>
     Hotel pradeep
    </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {pages.map((page, index) => (
    
                  <Tab key={index} label={page}/>
                ))}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
   </Toolbar>

</AppBar>



</>
  );
}
export default Header;*/

import React, { useState } from "react";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const pages = [
    "Our Hotels",
    "experiences",
    "Wedding",
    "ABoutUs",
    "ContactUs",
  ];

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon
            sx={{ transform: "scale(2)", position: "absolute", left: 150 }}
          />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Hotel pradeep
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Hotel pradeep
              </Typography>

              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {pages.map((page, index) => (
    <>
                  <Tab key={index} label={page}/>
                  <Menu >
                    <MenuItem>hi</MenuItem></Menu></>
                ))}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
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

export default Header;
