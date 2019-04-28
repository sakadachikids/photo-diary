import React from "react";
import Home from "../components/Home";

export default () => {
  const tileData: PhotoData[] = [
    {
      img: require("../icon-192x192.png"),
      title: "test",
      author: "test"
    }
  ];
  return <Home tileData={tileData} />;
};
