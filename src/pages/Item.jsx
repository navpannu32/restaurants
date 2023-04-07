import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = () => {
  const [item, setItem] = useState([]);
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    axios
      .get(`http://localhost/restaurants2/api/items/getItem.php?id=${id}`, {
        headers: {
          cors: "no-cors",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Item;
