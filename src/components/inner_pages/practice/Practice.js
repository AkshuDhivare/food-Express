import axios from "axios";
import React, { useEffect, useState } from "react";
import Custom from "./Custom";

function Practice() {
  const [data] = Custom("https://dummyjson.com/products?limit=100000000000000");
  return (
    <>
      {data.map((element) => {
        return <img src={element.thumbnail} />;
      })}
    </>
  );
}

export default Practice;
