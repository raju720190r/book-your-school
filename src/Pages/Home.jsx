import React from "react";


import Review from "./HomeComponent/Review";
import SwiperCarousel from "./HomeComponent/SwiperCarousel";
import Colleges from "./HomeComponent/Collages";
import Research from "./HomeComponent/Reserch";

const Home = () => {
  return (
    <div>
      <Colleges />
      <SwiperCarousel />
      <h2 className="text-5xl font-bold my-10 text-center">Research</h2>
      <Research />
      <h2 className="text-5xl font-bold my-10 text-center">Review</h2>
      <Review />
    </div>
  );
};

export default Home;
