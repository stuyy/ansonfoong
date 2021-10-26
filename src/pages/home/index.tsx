import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "../../components/Footer";
import { AboutSection } from "../../components/HomeComponents/AboutSection";
import { HomeSection } from "../../components/HomeComponents/HomeSection";
import { SkillsSection } from "../../components/HomeComponents/SkillsSection";

const HomePage: NextPage = () => {
  const ref = React.createRef<HTMLDivElement>();
  return (
    <>
      <Head>
        <title>ansonfoong.io</title>
        <meta property="og:site_name" content="Anson Foong Portfolio Website" />
        <meta property="og:title" content="Anson Foong" key="title" />
        <meta property="og:image" content="/me.png" />
        <meta property="og:url" content="https://ansonfoong.io" />
        <meta
          property="og:description"
          content="Anson Foong's Portfolio Website"
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#ff4d00"></meta>
      </Head>
      <header
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          backgroundColor: "#202020",
          color: "#fff",
          fontSize: "14px",
          textAlign: "center",
          padding: "8px 0",
        }}
      >
        <span>This website is still in development.</span>
      </header>
      <div className="page">
        <div className="page-body">
          <HomeSection ref={ref} />
          <AboutSection ref={ref} />
          <SkillsSection />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default HomePage;
