import React from "react";
import Banner from "../pages/Banner";
import About from "../pages/About";
import Explore from "../pages/Explore";

function HomePage() {
  return   <div className="w-full min-h-screen">
  <Banner/>
  <About/>
  <Explore/>
</div>
}

export default HomePage;
