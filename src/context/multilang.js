// libs
import React, { createContext, useState } from "react";
import { dictionary } from "./Dictionary";

export const MultilangContext = createContext();

const Multilang = ({ children }) => {
  const [defaultLanguage, setDefaultLanguage] = useState(dictionary.EN);

  const handleChangeVN = () => {
    setDefaultLanguage(dictionary.VN);
  };
  const handleChangeEN = () => {
    setDefaultLanguage(dictionary.EN);
  };

  const initial = {
    defaultLanguage,
    handleChangeVN,
    handleChangeEN,
  };

  return (
    <MultilangContext.Provider value={initial}>
      {children}
    </MultilangContext.Provider>
  );
};

export default Multilang;
