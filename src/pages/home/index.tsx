import { NextPage } from "next";
import { HomeSection } from "../../components/HomeComponents/HomeSection";

const HomePage: NextPage = () => {
  return (
    <div className="page">
      <div className="home-page-body">
        <HomeSection />
      </div>
    </div>
  );
};

export default HomePage;
