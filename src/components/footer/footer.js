import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <Box className="footer" id="contactUs">
      <Grid container>
        <Grid container ml={20} mt={5} columns={3}>
          <Typography variant="h2">Hotel Pradeep</Typography>
          <Grid item className="footerabout">
            <ul>
              <Typography variant="h4">Our Hotels</Typography>
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
          <Grid item >
            <ul>
              <Typography variant="h4">Address</Typography>
              <Grid item ml={1}>
                <li>
                  <Typography variant="h6">Hotel Pradeep, </Typography>
                </li>
                <li>
                  <Typography variant="h6">Jagatganj Varanasi,</Typography>
                </li>
                <li>
                  <Typography variant="h6"> UP, India PIN-221002</Typography>
                </li>
              </Grid>
            </ul>
          </Grid>

          <Grid item>
            <ul>
              <Typography variant="h4">Contact</Typography>
              <Grid item ml={1}>
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
        <Grid item>
         
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
