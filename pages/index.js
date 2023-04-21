import React from "react";
import { useState, useEffect } from "react";

import Faq from "../src/components/home/faq/Faq";
import HairSalonSection from "../src/components/home/hairSalonSection/HairSalonSection";
import HomeSection from "../src/components/home/homeSection/HomeSection";
import Layer from "../src/components/home/Layer/Layer";
import Prestation from "../src/components/home/prestation/Prestation";
import Loader from "../src/components/Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  
  return (
    <>
      <HomeSection />
      <HairSalonSection />
      <Layer />
      <Prestation />
      <Faq />
    </>
  );
};
export default Home;
