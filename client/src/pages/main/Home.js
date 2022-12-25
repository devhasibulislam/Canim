import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/home/Banner";
import Brands from "../../components/home/Brands";
import Categories from "../../components/home/Categories";
import Explore from "../../components/home/Explore";
import Stores from "../../components/home/Stores";
import Title from "../../components/Title";

const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <Banner />
      <Explore />
      <Categories />
      <Brands />
      <Stores />
      <Footer />
    </>
  );
};

export default Home;
