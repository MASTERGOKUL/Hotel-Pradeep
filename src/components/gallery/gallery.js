import { Fade, Slide } from "react-reveal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import "./gallery.css";
import ImageSource from "./imgSource";
export default function Gallery() {
 // praddep palace
  const slides1 = [
    { img: require("../../assets/pradeepPalace/palace-1.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-2.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-3.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-4.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-5.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-6.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-7.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-8.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-9.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-10.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-11.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-12.jpg"), title: "Palace" },
    { img: require("../../assets/pradeepPalace/palace-13.jpg"), title: "Palace" },
    ];
// pradeep star inn
const slides2 = [
  { img: require("../../assets/pradeepStarInn/starinn-1.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-2.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-3.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-4.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-5.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-6.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-7.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-8.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-9.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-10.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-11.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-12.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-13.jpg"), title: "Star Inn" },
  { img: require("../../assets/pradeepStarInn/starinn-14.jpg"), title: "Star Inn" },
  ];
  return (
    <Box className="gallery" id="gallery" paddingTop={10}>
      <div className="card aboutcard" sx={{ width: 200 }} align="center">
        <Slide left duration={1000}>
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

          <Slide left duration={1000}>
            <Typography
              variant="h4"
              color="text"
              sx={{ position: "relative", right: 600, top: -42 }}
              >
              Pradeep Palace
            </Typography>
          </Slide>
          {/*Images*/}
          <Fade duration={1500}>
          <ImageSource slides={slides1}/>
          </Fade>
        </div>

        {/*pradeep starinn*/}
        <Box sx={{pt:10}}>
          {/*vertical line*/}
          <div className="vertical-line" />

          <Slide left duration={1500}>
            <Typography
              variant="h4"
              color="text"
              sx={{ position: "relative", right: 600, top: -42 }}
              >
              Pradeep Star inn
            </Typography>
          </Slide>
          {/*Images*/}
          <Fade duration={1500}>
          <ImageSource slides={slides2}/>
          </Fade>
        </Box>
      </div>
    </Box>
  );
}
