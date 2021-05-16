// libs
import React from "react";
// components
import { listTopic } from "../../../../mocks";
// others
import "./style.scss";

const ListTopic = () => (
  <ul className="list-topic-wrapper">
    {listTopic.map((item) => (
      <li key={item.id} className="item-topic">
        <img src={item.src} alt="img" />
      </li>
    ))}
  </ul>
);

export default ListTopic;
