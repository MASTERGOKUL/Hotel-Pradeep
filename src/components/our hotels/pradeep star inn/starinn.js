import React from "react";
import DeatailCard from "../../headin card/deatailscard";
import InfoCard from "../../headin card/infocard";
export default function Starinn() {
  const rooms = (
    <p>
      Pradeep Palace Comparise of<b> 44 rooms</b> including
      Standard,Executive,Super Executive and Suite
    </p>
  );
  const banquet = (
    <p>
      Two halls including<b> Darbar Hall & La-Elegar </b>has beautiful &
      containing space for weddings & functions
    </p>
  );
  const restaurant = (
    <p>
      <b>Essence Restaurant</b> One of the best places in city for fine dining and celebrating
    </p>
  );
  const sincity = (
    <p>
      Lighten your mood with music and lighting at in<b> House Bar</b> 
    </p>
  );
  const ganga = (
    <p>
      <b>Akash Ganga</b> the open at Resto & Banquet fills a soothing experience amidst the rush of others giving you the look of beautiful marine Drive
    </p>
  );

  const name = "Pradeep Star Inn";
  const des = (
    <p>
      {" "}
      One of the best
      <b> Luxurious Corparate Hotel </b> in the city situated at the one of the
      most prime location in the city , <b>Hotel Preadeep Star Inn</b> has been
      setting a benchmark in the{" "}
      <b>Hosptality & Elegence sector sice day one</b> following the footsteps
      of our previous hotels , with new and luxurious make over
    </p>
  );

  const detail = {
    name: [
      "Rooms ",
      "Banquet Halls",
      "Restaurant",
      "Sincity-The Bar",
      "Akash Ganga",
    ],
    des: [rooms, banquet, restaurant, sincity,ganga],
  };
  const img1=require("../../../assets/pradeepStarInn/starinn-6.1.jpg");
  const img2=require("../../../assets/pradeepStarInn/starinn-10.1.jpg")
  return (
    <>
      <InfoCard name={name} des={des} img={img1}/>
      <DeatailCard name={detail.name} des1={detail.des} img={img2}/>
    </>
  );
}
