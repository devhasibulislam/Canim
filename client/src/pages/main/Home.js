import React from "react";
import Banner from "../../components/home/Banner";
import Explore from "../../components/home/Explore";
import Title from "../../components/Title";

const Home = () => {
  return (
    <section className="container mx-auto my-4 lg:px-0 px-4">
      <Title>Home</Title>
      <Banner />
      <Explore />
    </section>
  );
};

export default Home;
