import React from "react";
import Banner from "../pages/Banner";
import About from "../pages/About";
import Explore from "../pages/Explore";
import Gallery from "../pages/Gallery";
import Event from "../pages/Event";
import Introduction from "../pages/Introduction";
import Footer from "../pages/Footer";

function HomePage() {
  return   <div className="w-full min-h-screen">
  <Banner/>
  <About/>
  <Explore/>
  <Introduction/>
  <Gallery/>
  <Event/>
  {/* <Footer/> */}
</div>
}

export default HomePage;
