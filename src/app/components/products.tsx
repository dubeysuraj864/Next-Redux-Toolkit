"use client";
import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const itemData = useSelector((data: any) => data.item);

  return (
    <div>
      <div>Item Data: {itemData?.map((item: any, index: any) => {
        return <div key={index}><li>{item.name}</li></div>
      })}</div>
    </div>
  );
};

export default Products;
