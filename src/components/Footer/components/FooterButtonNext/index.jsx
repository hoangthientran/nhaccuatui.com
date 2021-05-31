// libs
import React, { useRef } from "react";
import { RightOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const FooterButtonNext = ({ firstId, setFirstId, lastId, setLastId }) => {
  const typingTimeoutRef = useRef(null);
  const handleClickNext = () => {
    if (firstId === 9) {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        setFirstId(0);
        setLastId(6);
      }, 500);
    } else {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        setFirstId(firstId + 1);
        setLastId(lastId + 1);
      }, 500);
    }
  };

  return (
    <div className="button-next" onClick={() => handleClickNext()}>
      <RightOutlined className="icon-button-right" />
    </div>
  );
};

export default FooterButtonNext;
