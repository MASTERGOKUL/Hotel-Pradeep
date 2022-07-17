import React from "react";
import { Grid } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function SocialMedia() {
const style={
    height:50,
    width:50,
    paddingRight:3,
}
    return (
        <Grid className="socialmedia" sx={{ml:6}}>
         <InstagramIcon sx={style}/>
         <FacebookIcon sx={style}/>
         <YouTubeIcon sx={style}/>
         <WhatsAppIcon sx={style}/>
         <TwitterIcon sx={style}/>
        </Grid>
    )
}
