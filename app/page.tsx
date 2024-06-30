import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Movies from "@/components/Movies";
const App = () => {
  return (
    <div className="w-full p-8 md:px-24 md:py-8 ">
      <div className="w-44 mx-auto">
        <Image src="/weavimovielogo.png" width={125} height={125} alt="logo" />
        <span>
          Powered by{" "}
          <span className="bg-green-radial text-transparent bg-clip-text">
            Weaviate
          </span>
        </span>
      </div>
      <HeroSection />
      <Movies />
    </div>
  );
};

export default App;
