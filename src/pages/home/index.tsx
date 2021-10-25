import { NextPage } from "next";
import { AboutSection } from "../../components/HomeComponents/AboutSection";
import { HomeSection } from "../../components/HomeComponents/HomeSection";

const HomePage: NextPage = () => {
  return (
    <div className="page">
      <div className="page-body">
        <HomeSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default HomePage;
