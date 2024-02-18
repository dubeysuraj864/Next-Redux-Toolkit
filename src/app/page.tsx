"use client";

import { useState } from "react";
import Cart from "./components/cart";
import Products from "./components/products"
import { useDispatch } from "react-redux";
import { addCount, addItem } from "./redux/slice";
import { MdOutlinePlaylistAdd } from "react-icons/md";

function Home() {
  let [count, setCount] = useState<any>(1);
  const [item, setItem] = useState<any>("");
  const dispatch = useDispatch();

  const countDispatch = () => {
    setCount(count + 1)
    console.log(addCount(count));
    dispatch(addCount(count));
  };

  const itemDispatch =() => {
    console.log(addItem(item))
    dispatch(addItem(item));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cart />
      <div className="bg-white p-3 rounded-full flex items-center ">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          className="border-0 outline-0 pl-2"
        />
        <button onClick={itemDispatch} className="bg-gray-200 p-2 rounded-full">
          <MdOutlinePlaylistAdd />
        </button>
      </div>
      <Products/>
      <button
        onClick={countDispatch}
        className="bg-black p-5 hover:bg-gray-200 hover:text-black border-2 hover:border-2 border-black text-white rounded-full text-xs transition-all"
      >
        Add to Cart
      </button>
    </main>
  );
}

export default Home;
