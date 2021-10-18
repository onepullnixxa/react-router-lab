import React from "react";
import Data from "../Data.js";

const Stocks = (props) => {

    const data = Data.filter(data => data.symbol === props.match.params.symbol)[0]
  // loaded function for when data is fetched

  const loaded = () => {
    return (
      <div>
        <h2>Company Name: {data.name}</h2>
        <h2>Price: {data.lastPrice}</h2>
      </div>
    );
  };

  // function for when data doesn't exist
  const loading = () => {
    return <h2>Data Loading...</h2>;
  };

  return data ? loaded() : loading();
};

export default Stocks;
