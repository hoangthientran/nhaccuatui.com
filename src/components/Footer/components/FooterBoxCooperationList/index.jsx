// libs
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// // mocks
import FooterCooperationList from "../FooterCooperationList";
import FooterButtonPrev from "../FooterButtonPrev";
import FooterButtonNext from "../FooterButtonNext";
// others
import "./style.scss";

const FooterBoxCooperationList = ({ cooperationList }) => {
  const [firstId, setFirstId] = useState(0);
  const [lastId, setLastId] = useState(6);

  useEffect(() => {
    const loop = setInterval(() => {
      if (firstId === 9) {
        setFirstId(0);
        setLastId(6);
      } else {
        setFirstId(firstId + 1);
        setLastId(lastId + 1);
      }
    }, 3000);

    return () => clearInterval(loop);
  });

  return (
    <div className="footer-box-cooperation-list-wrapper">
      <FooterCooperationList
        cooperationList={cooperationList}
        firstId={firstId}
        lastId={lastId}
      />
      <FooterButtonPrev
        firstId={firstId}
        lastId={lastId}
        setFirstId={setFirstId}
        setLastId={setLastId}
      />
      <FooterButtonNext
        firstId={firstId}
        lastId={lastId}
        setFirstId={setFirstId}
        setLastId={setLastId}
      />
    </div>
  );
};

FooterBoxCooperationList.propTypes = {
  cooperationList: PropTypes.array,
};

FooterBoxCooperationList.defaultProps = {
  cooperationList: [],
};

export default FooterBoxCooperationList;
