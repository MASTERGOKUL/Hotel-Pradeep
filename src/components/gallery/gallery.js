import { Slide } from "react-reveal";
import Typography from "@mui/material/Typography";
import { ImageList,ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./gallery.css";
import { PalaceImages } from "./imgSource";
export default function Gallery() {
  return (
    <Box className="gallery" id="gallery" paddingTop={10}>
      <div className="card aboutcard" sx={{ width: 200 }} align="center">
        <Slide left duration={1500}>
          {/*heading above line*/}
          <Typography variant="h3">Gallery</Typography>
        </Slide>

        {/*horizontal line*/}
        <Slide right duration={2000}>
          <div className="card-bordera"></div>
        </Slide>
        {/*pradeep palace*/}
        <div>
        {/*vertical line*/}
          <div className="vertical-line" />

          <Slide left duration={1500}>
          <Typography
            variant="h4"
            color="text"
            sx={{ position: "relative", right: 600, top: -42 }}
          >
            Pradeep Palace
          </Typography></Slide>
        </div>
        <ImageList sx={{ width:1400, height: 450}}>
      {PalaceImages.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </div>
    </Box>
  );
}
