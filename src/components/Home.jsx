import React from "react";
import Content from "./Content/Content";
import Cards from "./cards/Cards";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";


export default function Home() {
  return (
    <div>
     
     
      <Navbar />
      <Content />
      <Cards />
      <Footer />
    </div>
  );
}
