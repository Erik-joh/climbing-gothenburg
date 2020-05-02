import React from "react";
import Header from "../../components/Header";
import "./Home.css";
function Home() {
  return (
    <div className="home-page">
      <Header
        title="Gothenburg climbing routes"
        description="On this site you can find climbing routes around gothenburg."
      />
    </div>
  );
}
export default Home;
