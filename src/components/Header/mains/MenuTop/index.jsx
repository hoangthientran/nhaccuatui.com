// libs
import React, { useEffect } from "react";
// components
import HeaderIconLogo from "../../components/HeaderIconLogo";
import HeaderNewVersion from "../../components/HeaderNewVersion";
import HeaderTitle from "../../components/HeaderTitle";
// api
import titleHeaderApi from "../../../../api/titleHeaderApi";
// others
import "./style.scss";

const MenuTop = () => {
  useEffect(() => {
    const fecthTitleHeader = async () => {
      try {
        const titleHeaders = await titleHeaderApi.getAll();
        console.log(titleHeaders);
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    };

    fecthTitleHeader();
  }, []);

  return (
    <div className="header-menu-top-wrapper">
      <ul className="menu-top-inner">
        <HeaderIconLogo />
        <HeaderNewVersion />
        <HeaderTitle />
      </ul>
    </div>
  );
};

export default MenuTop;
