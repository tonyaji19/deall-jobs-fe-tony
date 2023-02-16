import {
  MagnifyingGlassIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";

const Carts = () => {
  const [dataProducts, setDataProducts] = useState([]);

  const router = useRouter();

  const getDataProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/carts`);
      setDataProducts(response.data.carts);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "User Id",
      selector: (row) => "#" + row.userId,
      sortable: true,
      center: true,
      style: {
        fontWeight: "500",
      },
    },

    {
      name: "Total Product",
      selector: (row) => row.totalProducts,
      center: true,
    },
    {
      name: "Total Quantity",
      selector: (row) => row.totalQuantity,
      center: true,
    },

    {
      name: "Total Price",
      selector: (row) =>
        "$ " + new Intl.NumberFormat("en-US").format(row.discountedTotal),
      width: "10%",
      center: true,
      sortable: true,
      style: {
        color: "green",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      name: "Cart Id",
      selector: (row) => "#" + row.id,
      sortable: true,
      center: true,
    },
  ];

  useEffect(() => {
    getDataProducts();
  }, []);

  const paginationComponentOptions = {
    rowsPerPageText: "Product per page",
  };

  const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: "13px",
        height: "60px",
        fontFamily: "quicksand",
        fontWeight: "bold",
        backgroundColor: "#6813d888",
      },
    },
    rows: {
      style: {
        height: "60px",
        fontFamily: "quicksand",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  };

  const showDetail = (row) => {
    router.push(`/carts/${row.id}`);
  };

  return (
    <DataTable
      columns={columns}
      data={dataProducts}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="69vh"
      paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
      highlightOnHover={true}
      paginationComponentOptions={paginationComponentOptions}
      responsive={true}
      customStyles={tableCustomStyles}
      onRowClicked={(row, ev) => {
        ev.preventDefault();
        showDetail(row);
      }}
    />
  );
};

export default Carts;
