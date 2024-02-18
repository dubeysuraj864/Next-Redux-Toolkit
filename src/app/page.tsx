"use client";

import { useState } from "react";
import Cart from "./components/cart";
import { useDispatch } from "react-redux";
import { addCount } from "./redux/slice";
// import { MdOutlinePlaylistAdd } from "react-icons/md";

function Home() {
  let [count, setCount] = useState<any>(0);
  const [item, setItem] = useState<any>("");
  console.log(item);
  const dispatch = useDispatch();

  console.log(item, "i");

  const countDispatch = () => {
    count += 1;
    console.log(addCount(count));
    dispatch(addCount(count));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cart />
      {/* <div className="bg-white p-3 rounded-full flex items-center ">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          className="border-0 outline-0 pl-2"
        />
        <button onClick={countDispatch} className="bg-gray-200 p-2 rounded-full">
          <MdOutlinePlaylistAdd />
        </button>
      </div> */}
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
