import {
  MagnifyingGlassIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import { keyframes } from "styled-components";

const ProductsTable = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchCateg, setSearchCateg] = useState("");
  const [filter, setfilter] = useState([]);
  const [categories, setCategories] = useState([]);

  const router = useRouter();

  const getDataProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      setDataProducts(response.data.products);
      setfilter(response.data.products);
      setCategories(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.title,
      sortable: true,
      style: {
        fontWeight: "600",
      },
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Price",
      selector: (row) =>
        "$ " + new Intl.NumberFormat("en-US").format(row.price),
      width: "10%",

      style: {
        color: "red",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      center: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      style: {
        textTransform: "capitalize",
      },
      center: true,
    },
    {
      name: "Images",
      selector: (row) => <img width={70} height={70} src={row.thumbnail} />,
      style: {
        img: {
          borderRadius: "5px",
        },
      },
    },
  ];

  useEffect(() => {
    getDataProducts();
  }, []);

  useEffect(() => {
    const result = dataProducts.filter((data) => {
      return (
        data.title.toLowerCase().match(search.toLowerCase()) ||
        (data.category.toLowerCase().match(searchCateg.toLowerCase()) &&
          (categories !== ""
            ? data.category === categories
            : data.category === data.category))
      );
    });
    setCategories(result);
    setfilter(result);
  }, [search, searchCateg]);

  const paginationComponentOptions = {
    rowsPerPageText: "Product per page",
  };

  const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        backgroundColor: "#6813d888",
      },
    },
    rows: {
      style: {
        height: "60px",
      },
    },
  };

  const showDetail = (row) => {
    router.push(`/cart/${row.id}`);
  };

  return (
    <DataTable
      columns={columns}
      data={filter}
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
      subHeader
      subHeaderComponent={
        <>
          <Link
            href="/productChart"
            className="flex justify-between gap-2 items-center border rounded-md p-1.5 px-3 bg-red-500 text-white mr-3"
          >
            <ChartBarSquareIcon className="h-6 w-6 text-white" />
            <div>Chart</div>
          </Link>

          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center border rounded-md p-1.5 my-4 border-gray-400">
              <MagnifyingGlassIcon className="h-5 w-6 mr-3 ml-1 text-gray-700" />
              <input
                className="outline-none w-60 text-md "
                type="text"
                placeholder="Search here.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="categoriess"></label>
              <select
                name="categoriess"
                id="categoriess"
                className="mx-2 my-2 p-1"
                onChange={(e) => setSearchCateg(e.target.value)}
              >
                <option value="" selected>
                  All Category
                </option>
                <option value="smartphones">smartphones</option>
                <option value="Laptops">Laptops</option>
                <option value="Fragrances">Fragrances</option>
                <option value="Skincare">Skincare</option>
                <option value="Groceries">Groceries</option>
                <option value="Home-Decoration">Home-Decoration</option>
              </select>
            </div>
          </div>
        </>
      }
    />
  );
};

export default ProductsTable;
