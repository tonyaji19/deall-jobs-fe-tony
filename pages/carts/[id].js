import React, { useEffect, useState } from "react";
import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios.get("https://dummyjson.com/carts/");
  const data = await res.data;

  const paths = data.carts.map((carts) => {
    return {
      params: { id: carts.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get("https://dummyjson.com/carts/" + id);
  const data = await res.data;

  return {
    props: { carts: data.products },
  };
};

const Details = ({ carts }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/?limit=1")
      .then((res) => {
        console.log(res);
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <p className=" mb-4 font-quicksand text-xl">Details</p>

      <div className="App">
        {users.map((user) => (
          <div
            key={user.id}
            className="w-[100%] text-gray-700 bg-gray-300 p-3 grid grid-cols-2 font-quicksand mb-4 font-semibold"
          >
            <p className="p-1">
              User :{" "}
              <span className="italic font-normal">
                {user.firstName} {user.lastName}{" "}
              </span>
            </p>
            <p className="p-1">
              Email : <span className="italic font-normal">{user.email}</span>
            </p>
            <p className="p-1">
              Phone : <span className="italic font-normal">{user.phone}</span>
            </p>
            <p className="p-1">
              Address :{" "}
              <span className="italic font-normal">{user.address.address}</span>
            </p>
          </div>
        ))}
      </div>

      <p className=" mb-4 font-quicksand text-xl">Products</p>
      <div className="font-quicksand">
        <table className="min-w-full text-center">
          <thead className="border-b bg-[#645CBB] text-white">
            <tr>
              <th className="px-3 py-5 text-center">No</th>
              <th className="px-3 py-5 text-start">Product Name</th>
              <th className="px-3 py-5 text-center">Qty</th>
              <th className="px-3 py-5 text-start">Total</th>
              <th className="px-3 py-5 text-center">Discount</th>
              <th className="px-3 py-5 text-center">Price</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((datas, index) => (
              <tr className="border-b" key={datas.id}>
                <td className="text-center p-2">{index + 1}.</td>
                <td className="p-3.5 text-start">{datas.title}</td>
                <td className="p-3.5 text-center">{datas.quantity}</td>
                <td className="p-3.5 text-start text-green-600">
                  $ {datas.total}
                </td>
                <td className="p-3.5 text-center">
                  {datas.discountPercentage}%
                </td>
                <td className=" p-3.5 text-center text-green-600">
                  $ {datas.discountedPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;
