import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";

export default function TopBar({ showNav, setShowNav }) {
  return (
    <div
      className={`fixed w-full z-30 bg-gray-100 rounded-b-xl h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-10 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16 ">
        <Popover className="relative ">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
            <div class="absolute inline-block top-0 left-3 bottom-auto right-auto translate-x-2/4 -translate-y-1/2 p-1 text-xs bg-pink-700 rounded-full z-10"></div>
            <BellIcon className="h-6 w-6 " />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-1 z-50 mt-2  bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative px-6 py-4">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications</p>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-[#6813d888] h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Love One</p>
                      <p className="text-sm text-gray-500 truncate">Test</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-[#6813d888] h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-white" />
                      <path
                        fill="currentColor"
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                      ></path>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">Congrats!</p>
                      <p className="text-sm text-gray-500 truncate">
                        Welcome to Dashboard Tony,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="/icon-pic.jpg"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile"
                />
              </picture>
              <span className="hidden md:block font-medium text-gray-700">
                Tony Aji
              </span>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-[#6813d888] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <PencilIcon className="h-4 w-4 mr-2 " />
                    Edit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-[#6813d888] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <ShoppingBagIcon className="h-4 w-4 mr-2" />
                    Items
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-[#6813d888] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
