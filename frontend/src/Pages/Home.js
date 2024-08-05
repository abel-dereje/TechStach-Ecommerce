import React from "react";
import Category from "./Category";
import ContentAreaOne from "./ContentAreaOne";
import ContentAreaTwo from "./ContentAreaTwo";
import Slider from "./Slider";
import ContentAreaThree from "./ContentAreaThree";
import ContentAreaFour from "./ContentAreaFour";
import ContentAreaFive from "./ContentAreaFive";
import ContentAreaSix from "./ContentAreaSix";
import Advertisement from "./Advertisement";


const Home = () => {
  
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row">
        <Category />

        <div className="w-full md:w-3/5 md:ml-4">
          <Slider />

          <ContentAreaOne />

          <ContentAreaTwo />

          <ContentAreaThree />
          
          <ContentAreaFour />
          
          <ContentAreaFive />
          
          <ContentAreaSix />
        </div>

        {/* Advertisement */}
        
        <Advertisement />
      </div>
    </div>
  );
};

export default Home;
