import { ChartBarSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-gray-700 font-quicksand -mt-40 ">
      <div>
        <p className="text-xl text-center font-bold">
          Selamat datang kembali, Tony Aji
        </p>
        <p className="text-center">
          Ini adalah halaman website dashboard{" "}
          <span className="font-bold text-[#6813d888]">deall jobs</span>
        </p>
      </div>
    </div>
  );
}
