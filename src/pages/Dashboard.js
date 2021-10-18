import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data.js";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      {Data.map((stocks) => {
        const { name, symbol } = stocks;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Dashboard;
