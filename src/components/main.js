import React from "react";
import AboutUs from "./aboutus/aboutus";
import Footer from "./footer/footer";
import Headerimg from "./headerimg";
import Navbar from "./navbar/navbar";
import Palace from "./our hotels/pradeep palace/palace";
import Starinn from "./our hotels/pradeep star inn/starinn";

const Main = () => {
  return (
    <>
      <Navbar />
      <Headerimg id="heading" />
      <AboutUs id="about"/>
      <Palace id="palace"/>
      <Starinn />
      <Footer id="contact"/>
    </>
  );
};
export default Main;
