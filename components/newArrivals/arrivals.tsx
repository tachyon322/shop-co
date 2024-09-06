"use client";

import React from "react";
import { itemsData } from "@/data/itemsData";
import { Rate } from "antd";

export default function Arrivals() {
  const newArrivalsFilter = itemsData.sort((a, b) => new Date(b.addingDate).getTime() - new Date(a.addingDate).getTime());

  const newArrivals = newArrivalsFilter.slice(0, 4);

  return (
    <div className="font-[Satoshi-Bold] mt-[72px] flex">
      <div className="wide-wrap flex flex-col justify-center items-center">
        <h1 className="font-[IntegralCF] text-center mb-[55px]">New Arrivals</h1>

        <ul className="flex gap-5">
          {newArrivals.map((item) => {
            return (
              <li key={item.title} className="flex-col">
                <img className="w-[295px] h-[295px] rounded-[20px]" 
                src={item.img} 
                alt="" />
                <h3 className="mt-[16px]">{item.title}</h3>
                <div className="flex items-baseline">
                    <Rate value={3} style={{ fontSize: 14 }} />
                    <p className="text-[#00000099]">3.0/5.0</p>
                </div>
                <p className="font-[24px] font-[Satoshi-Bold]">${item.price}</p>
              </li>
            )
          })}
        </ul>

        <button className="w-[218px] h-[52px] py-4 px-[54px] mt-9
        rounded-full bg-white text-black border flex items-center justify-center
        hover:bg-black hover:text-white duration-100">View All</button>

        <div className="border border-[#0000001a] w-[1240px] h-0 my-16"></div>
      </div>
    </div>
  );
}
