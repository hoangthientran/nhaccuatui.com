// libs
import React, { useEffect } from "react";
// others
import "./App.css";
import Footer from "./components/Footer";
// components
import Header from "./components/Header";
import Home from "./pages/Home";
import playlistApi from "./api/playlistApi";

function App() {
  useEffect(() => {
    const fecthTitleHeader = async () => {
      try {
        const playlist = await playlistApi.getAll();
        console.log(playlist);
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    };
    fecthTitleHeader();
  }, []);
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
