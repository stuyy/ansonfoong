import { NextPage } from "next";
import { AboutSection } from "../../components/HomeComponents/AboutSection";
import { HomeSection } from "../../components/HomeComponents/HomeSection";
import { SkillsSection } from "../../components/HomeComponents/SkillsSection";

const HomePage: NextPage = () => {
  return (
    <div className="page">
      <div className="page-body">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default HomePage;
