import React, { useEffect, useState } from "react";
import ProductsTable from "../components/ProductsTable";

const products = (props) => {
  return (
    <div className="font-quicksand ">
      <ProductsTable />
    </div>
  );
};

export default products;
