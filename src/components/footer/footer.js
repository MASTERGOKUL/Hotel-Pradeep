import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LuggageSharpIcon from '@mui/icons-material/LuggageSharp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SocialMedia from "./socialmedia";
import "./footer.css";

const Footer = () => {
  return (
    <Box className="footer" id="contactUs">
      <Grid container>
          <Grid item sx={{position:"relative", top:200, left:200}}>
            <SocialMedia />
          </Grid>
        <Grid container ml={20} mt={5} columns={3}>
          <Box
            component="img"
            src={require("../../assets/PradeepLogo.jpg")}
            sx={{ height: "70px" }}
          />
          <Typography variant="h2">Hotel Pradeep</Typography>
          <Grid item className="footerabout">
            <ul>
              <Typography variant="h4">
                <LuggageSharpIcon sx={{ height: 30, width: 30 }} />
                Our Hotels
              </Typography>
              <Grid item ml={1}>
                <li>
                  <Typography variant="h6">Pradeep Star Inn</Typography>
                </li>
                <li>
                  <Typography variant="h6">Pradeep Palace</Typography>
                </li>
                <li>
                  <Typography variant="h6">Akash Ganga</Typography>
                </li>
              </Grid>
            </ul>
          </Grid>
          {/*address */}
          <Grid item>
            <ul>
              <Typography variant="h4">
                <LocationOnRoundedIcon
                  sx={{ height: 30, width: 30, position: "relative", top: 3 }}
                />
                Address
              </Typography>
              <Grid item ml={2}>
                <li>
                  <Typography variant="h6">Gas Godom Lane, </Typography>
                </li>
                <li>
                  <Typography variant="h6">Opposite A.D Mall,</Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    {" "}
                    Golghar, Gorakhpur PIN-273001
                  </Typography>
                </li>
              </Grid>
            </ul>
          </Grid>
          {/*contaact details */}
          <Grid item>
            <ul>
              <Typography variant="h4">
                <PermIdentityIcon
                  sx={{ height: 30, width: 30, position: "relative", top: 3 }}
                />
                Contact
              </Typography>
              <Grid item ml={2}>
                <li>
                  <Typography variant="h6">
                    <b>Email: </b>info@hotelpradeep.com{" "}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    <b>Fax :</b> +91-542-2204898
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    <b>Phone : </b>+91-542-2204963, 2204994
                  </Typography>
                </li>
              </Grid>
            </ul>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
