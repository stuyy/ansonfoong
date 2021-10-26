import { NextPage } from "next";
import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { AboutSection } from "../../components/HomeComponents/AboutSection";
import { HomeSection } from "../../components/HomeComponents/HomeSection";
import { SkillsSection } from "../../components/HomeComponents/SkillsSection";

const HomePage: NextPage = () => {
  const ref = React.createRef<HTMLDivElement>();
  useEffect(() => {
    console.log(ref);
  });
  return (
    <div className="page">
      <div className="page-body">
        <HomeSection ref={ref} />
        <AboutSection ref={ref} />
        <SkillsSection />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
