// libs
import { LeftOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
// others
import "./style.scss";

const FooterButtonPrev = ({ firstId, setFirstId, lastId, setLastId }) => {
  const tyingTimeoutRef = useRef(null);
  const handleClickPre = () => {
    if (firstId === 0) {
      if (tyingTimeoutRef.current) {
        clearTimeout(tyingTimeoutRef.current);
      }
      tyingTimeoutRef.current = setTimeout(() => {
        setFirstId(9);
        setLastId(15);
      }, 500);
    } else {
      if (tyingTimeoutRef.current) {
        clearTimeout(tyingTimeoutRef.current);
      }
      tyingTimeoutRef.current = setTimeout(() => {
        setFirstId(firstId - 1);
        setLastId(lastId - 1);
      }, 500);
    }
  };

  return (
    <div className="button-pre" onClick={() => handleClickPre()}>
      <LeftOutlined className="icon-button-left" />
    </div>
  );
};

export default FooterButtonPrev;
