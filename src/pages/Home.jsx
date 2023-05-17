import React from "react";
import HomeNavBar from "./../components/home/HomeNavBar";
import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";

const Home = () => {
  return (
    <div className="home container-fluid p-0 m-0 d-flex flex-column">
      <Header />
      <HomeNavBar />
      <Footer />
    </div>
  );
};

export default Home;
