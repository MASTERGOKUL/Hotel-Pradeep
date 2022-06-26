import React from "react";
import Headerimg from "./headerimg";
import Navbar from "./navbar/navbar";
import Palace from "./our hotels/pradeep palace/palace";
import Starinn from "./our hotels/pradeep star inn/starinn";

const Main = () => {
  return (
    <>
      <Navbar />
      <Headerimg />
      <Palace />
      <Starinn />
    </>
  );
};
export default Main;
