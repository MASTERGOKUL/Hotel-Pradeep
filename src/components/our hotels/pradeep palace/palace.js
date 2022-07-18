import React from "react";
import DeatailCard from "../../headin card/deatailscard";
import InfoCard from "../../headin card/infocard";
export default function Palace() {
  const rooms = (
    <p>
      Pradeep Palace Comparise of<b> 43 rooms</b> including Deluxe,Luxury and
      Suite
    </p>
  );
  const banquet = (
    <p>
      <b>Two Darbar halls </b>provide significant gathering space for weddings &
      functions
    </p>
  );
  const restaurant = (
    <p>
      <b>Essence Restaurant</b> a place for fine dining with people you love
    </p>
  );
  const conference = (
    <p>
      <b>Corporate Space</b> for meetings and business gathering
    </p>
  );
  const kitty = (
    <p>
      <b>Elegant party</b> for family and friends gathering and celebrations
    </p>
  );

  const name = "Pradeep Palace";
  const des = (
    <p>
      {" "}
      <b> Best Budget Corparate hotel </b> in the city situated at the most
      prime location in the city , <b>Hotel Preadeep Palace</b> has set a bench
      mark in the hosptality sector .serving you with the best since{" "}
      <b>9 years</b> and will continue to do same
    </p>
  );

  const detail = {
    name: [
      "Rooms ",
      "Banquet Halls",
      "Restaurant",
      "Conference Room",
      "Kitty Party Halls",
    ],
    des: [rooms, banquet, restaurant, conference, kitty],
  };
  // infocard imge
  const img1 = require("../../../assets/pradeepPalace/palace-12.jpg");
  //detail card image
  const img2 = require("../../../assets/pradeepPalace/palace-17.jpg");
  return (
    <>
      <InfoCard name={name} des={des} img={img1}/>
      <DeatailCard name={detail.name} des1={detail.des} img={img2} />
    </>
  );
}
