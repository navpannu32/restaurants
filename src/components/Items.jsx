import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Items.css";

const Items = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/restaurants2/api/items/index.php`, {
        headers: {
          cors: "no-cors",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="items">
      {item.map((item) => (
        <div className="item" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
