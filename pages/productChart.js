import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function ProductChart() {
  const [dataProducts, setDataProducts] = useState([]);

  const getDataProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      setDataProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataProducts();
  }, []);
  return (
    <>
      <div className="flex justify-between pb-5 pt-2 ">
        <button
          onClick={() => {
            history.back();
          }}
          className="flex justify-between gap-2 items-center border rounded-md p-2 px-3 bg-gray-300"
        >
          <ArrowUturnLeftIcon width={20} height={17} />
          <div>Back</div>
        </button>
        <div className="text-2xl font-quicksand">Data Chart</div>
      </div>
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          data={dataProducts}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 1 2" />
          <XAxis
            label={{
              value: "Product",
              angle: 0,
              position: "insideButton",
              fill: "#20262E",
            }}
            dataKey="title"
            stroke="#20262E"
            tick={false}
          />
          <YAxis
            label={{
              value: "Stock",
              angle: -90,
              position: "insideLeft",
              fill: "#20262E",
            }}
          />
          <Tooltip />
          <Bar dataKey="stock" fill="#645CBB" background={{ fill: "#E9E8E8" }}>
            <LabelList
              style={{ fontSize: "9px" }}
              dataKey="title"
              angle="270"
              fill="#fff"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
