"use client";
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartCount = useSelector((data: any) => data.counter);
  const uniqueNames: any = [...new Set(cartCount?.map((item: any) => item))];

  const value = uniqueNames[uniqueNames?.length - 1]?.name || 0;

  return (
    <div className="relative">
      <BsCart4 className="text-5xl" />
      <div className="bg-red-700 w-fit py-1 px-3 text-white rounded-full absolute -top-[22px] -right-[22px]">
        {value}
      </div>
    </div>
  );
};

export default Cart;
