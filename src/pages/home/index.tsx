import { NextPage } from "next";
import { Header } from "../../components/Header";
import { HomeSection } from "../../components/HomeComponents/HomeSection";

const HomePage: NextPage = () => {
  return (
    <div className="page">
      <div className="page-body">
        <Header />
        <HomeSection />
      </div>
    </div>
  );
};

export default HomePage;
