"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [counter, setCounter] = useState(quantity);
  const onQuantityChange = (value: number) => {
    if (counter + value < 1) return;
    if (counter + value > 5) return;

    setCounter(counter + value);
  };
  return (
    <div className="flex">
      <button onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline
          size={30}
          color={counter == 1 ? "gray" : "black"}
        />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-100 text-center">{counter}</span>
      <button onClick={() => onQuantityChange(+1)}>
        <IoAddCircleOutline size={30} color={counter == 5 ? "gray" : "black"} />
      </button>
    </div>
  );
};
