import React from "react";
import { Header, Navigation } from "./ui";
import { GradientCircle, HeaderTag, LandscapeImage } from "./items";

const Home = () => {
  return (
    <main className="fixed top-0 left-0 p-[2rem] w-full h-screen flex flex-col">
      <Navigation />
      <Header />
      <LandscapeImage />
    </main>
  );
};

export default Home;
