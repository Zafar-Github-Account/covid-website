import type { NextPage } from "next";
import Header from "../components/header";
import CronavirusStatistics from "../components/cronavirus-statistics";
import WhatIsCoronavirus from "../components/what-is-coronavirus";
import WhatIsVaccination from "../components/what-is-vaccination";
import Logo from "../components/logo";
import HomeIcon from "../components/home-icon";
import Yourself from "../components/yourself";
import SymptomsOfCrona from "../components/symptoms-of-crona";
import NewsAndArticle from "../components/news-and-article";
import Footer from "../components/footer";

const Destop: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[5353px] overflow-hidden">
      <Header />
      <CronavirusStatistics />
      <WhatIsCoronavirus />
      <WhatIsVaccination />
      <Logo />
      <HomeIcon />
      <Yourself />
      <SymptomsOfCrona />
      <NewsAndArticle />
      <Footer />
    </div>
  );
};

export default Destop;
