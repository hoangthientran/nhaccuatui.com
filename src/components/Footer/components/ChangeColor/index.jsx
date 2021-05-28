// libs
import React, { useContext } from "react";
// mocks
import { listColor } from "../../../../mocks";
// context
import { ThemeContext } from "../../../../context/ThemeContext";
// others
import "./style.scss";

const ChangeColor = () => {
  const { setColor } = useContext(ThemeContext);
  const handleChangeColor = (color) => setColor(color);

  return (
    <ul className="nav-pc-list">
      {listColor.map(({ id, color }) => (
        <li
          key={id}
          onClick={() => handleChangeColor(color)}
          className="color-item"
          style={{ backgroundColor: `${color}` }}
        ></li>
      ))}
    </ul>
  );
};

export default ChangeColor;
