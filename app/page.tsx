import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
const App = () => {
  return (
    <div className="w-full p-8 md:px-24 md:py-8 ">
      <div className="w-44 mx-auto">
        <Image src="/weavimovielogo.png" width={125} height={125} alt="logo" />
        <span>Powered by Weaviate</span>
      </div>
      <HeroSection />
    </div>
  );
};

export default App;
