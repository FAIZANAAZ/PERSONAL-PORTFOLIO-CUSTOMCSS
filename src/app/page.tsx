"use client";

import TimelineAbout from "@/components/About/fileabout";
import ParticlesComponent from "../components/Design_back/filedesing";
import Home1 from "@/components/Home/filehome";


export default function Home() {
  return (
    <div className="relative">
      <ParticlesComponent />
      <Home1 />
      <TimelineAbout/>
      
    </div>
  );
}


