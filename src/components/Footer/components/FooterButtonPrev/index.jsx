// libs
import { LeftOutlined } from "@ant-design/icons";
import React from "react";
// others
import "./style.scss";

const FooterButtonPrev = ({ firstId, setFirstId, lastId, setLastId }) => {
  const handleClickPre = () => {
    if (firstId === 0) {
      setFirstId(9);
      setLastId(15);
    } else {
      setFirstId(firstId - 1);
      setLastId(lastId - 1);
    }
  };

  return (
    <div className="button-pre" onClick={() => handleClickPre()}>
      <LeftOutlined className="icon-button-left" />
    </div>
  );
};

export default FooterButtonPrev;
