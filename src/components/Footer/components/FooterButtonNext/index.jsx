// libs
import React from "react";
import { RightOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const FooterButtonNext = ({ firstId, setFirstId, lastId, setLastId }) => {
  const handleClickNext = () => {
    if (firstId === 9) {
      setFirstId(0);
      setLastId(6);
    } else {
      setFirstId(firstId + 1);
      setLastId(lastId + 1);
    }
  };

  return (
    <div className="button-next" onClick={() => handleClickNext()}>
      <RightOutlined className="icon-button-right" />
    </div>
  );
};

export default FooterButtonNext;
