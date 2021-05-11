// libs
import React from "react";

// others
import "./style.scss";

Thumbnail.propTypes = {};

function Thumbnail() {
  return (
    <div className="thumbnail">
      <ul className="thumbnail__content">
        <li className="thumbnail__item">
          <img
            src="https://avatar-ex-swe.nixcdn.com/slideshow/2021/05/07/5/e/a/4/1620369968263_org.jpg"
            alt="thuong thuc noi buon - tien cookie"
          />
        </li>
      </ul>
    </div>
  );
}

export default Thumbnail;
