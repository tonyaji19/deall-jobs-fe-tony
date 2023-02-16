import { forwardRef } from "react";
import Link from "next/link";
import {
  HomeIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div
      ref={ref}
      className="fixed w-64 h-full z-40 bg-white border-gray-200 border-r border-double  rounded-tr-3xl shadow-sm"
    >
      <div className="flex justify-center mt-10 mb-12">
        <picture>
          <img
            className="w-24 h-auto rounded-2xl border-l-4 border-b-4 border-gray-600 cursor-pointer"
            src="/deall-icon.png"
            alt="logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 ml-5 rounded-l-xl rounded-sm text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-[#6813d8c3] text-white"
                : "text-gray-600 hover:bg-[#6813d888] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/products">
          <div
            className={`pl-6 py-3 ml-5 rounded-l-xl rounded-sm text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/products"
                ? "bg-[#6813d8c3] text-white"
                : "text-gray-600 hover:bg-[#6813d888] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <ShoppingBagIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Products</p>
            </div>
          </div>
        </Link>
        <Link href="/carts">
          <div
            className={`pl-6 py-3 ml-5 rounded-l-xl rounded-sm text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/carts"
                ? "bg-[#6813d8c3] text-white"
                : "text-gray-600 hover:bg-[#6813d888] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <ShoppingCartIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Cart</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
