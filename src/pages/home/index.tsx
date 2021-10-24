import { NextPage } from "next";
import { Header } from "../../components/Header";

const HomePage: NextPage = () => {
  return (
    <div className="page">
      <div className="page-body">
        <Header />
      </div>
    </div>
  );
};

export default HomePage;
