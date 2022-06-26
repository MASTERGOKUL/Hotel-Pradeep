import React from "react";
import DeatailCard from "../../headin card/deatailscard";
import InfoCard from "../../headin card/infocard";
export default function Palace() {
  const name ={ name: ["Rooms ", "Banquet Halls", "Restaurant", "Conference Room", "Kitty Party Halls"],des:['jkl','yuio','hl','hk','hyiu']};
  const des1 = "Pradeep palace comprise of 43 rooms including Deluxe,Luxury and Suite";
  
  return (
<>
    <InfoCard name={name.des} des1/>
    <DeatailCard name={name.name} des1={des1} />
    </>
  );
}
