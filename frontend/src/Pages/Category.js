import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faChevronUp,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SalesCard from "./SalesCard";

const Category = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };
  return (
    <div className="w-full md:w-1/5 p-4">
          {/* Collapsible Category Section */}
          <div className="bg-[#009FBD] p-2 rounded-lg text-white mb-4">
            <h2
              className="text-lg font-bold cursor-pointer flex items-center justify-between"
              onClick={toggleCategory}
            >
              <FontAwesomeIcon icon={faList} className="mr-2" />
              Categories
              <FontAwesomeIcon
                icon={isCategoryOpen ? faChevronUp : faChevronDown}
                className="ml-2"
              />
            </h2>
          </div>
          <div className="mt-2 space-y-2 bg-white p-2 rounded-lg text-black mb-4">
            {isCategoryOpen && (
              <ul className="text-gray">
                <li className="relative group">
                  <a
                    href="#apple"
                    className="block py-2 px-4 rounded-lg flex items-center justify-between text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Airpodes</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block z-20">
                      <li className="mt-2">
                        <a
                          href="#iphone"
                          className="block py-2 px-4  hover:bg-white hover:text-[#009FBD]"
                        >
                          Refrigerator
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4  hover:bg-white hover:text-[#009FBD]"
                        >
                          Washing Machine
                        </a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#apple"
                    className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Camera</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block z-20">
                      <li className="mt-2">
                        <a
                          href="#iphone"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          TV Parts
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Oven Parts
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Washing Machine Parts
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Refrigerator Parts
                        </a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#apple"
                    className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Earphones</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block z-20">
                      <li className="mt-2">
                        <a
                          href="#iphone"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Samsung
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Apple
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Iphone{" "}
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Tablet
                        </a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#apple"
                    className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Mobile</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block z-20">
                      <li className="mt-2">
                        <a
                          href="#iphone"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Laptops
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Monitors
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Networking
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Storage
                        </a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#apple"
                    className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Mouse</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block z-20">
                      <li className="mt-2">
                        <a
                          href="#iphone"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Speaker
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Earbuds{" "}
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="#macbook"
                          className="block py-2 px-4 hover:bg-white hover:text-[#009FBD]"
                        >
                          Headphones
                        </a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a
                    href="#watch"
                    className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Printers</p>
                  </a>
                </li>
                <li>
                  <li>
                    <a
                      href="#watch"
                      className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                    >
                      <p className="font-bold">Processors</p>
                    </a>
                  </li>
                  <a
                    href="#watch"
                    className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Refrigerator</p>
                  </a>
                  <a
                    href="#watch"
                    className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Speakers</p>
                  </a>
                  <a
                    href="#watch"
                    className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Trimmers</p>
                  </a>
                  <a
                    href="#watch"
                    className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Televisions</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#tv"
                    className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Watches</p>
                  </a>
                </li>
              </ul>
            )}
          </div>

          <SalesCard />
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold">Simple Card</h2>
            <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
              <p className="text-gray-600">4x4</p>
            </div>
          </div>
        </div>
  )
}

export default Category
