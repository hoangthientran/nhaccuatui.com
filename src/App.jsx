// libs
import React, { useEffect } from "react";
// components
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// others
import "./App.css";
import categoryApi from "./api/categoryApi";

function App() {
  useEffect(() => {
    const fecthTitleHeader = async () => {
      const categories = await categoryApi.getAll();
      console.log(categories);
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
