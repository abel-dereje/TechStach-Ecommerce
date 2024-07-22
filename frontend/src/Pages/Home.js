import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faChevronUp,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar for Categories */}
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
                    <p className="font-bold">Appliances</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block">
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
                    <p className="font-bold">Parts</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block">
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
                    <p className="font-bold">Phone and Tablets</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block">
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
                    <p className="font-bold">Computing</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block">
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
                    <p className="font-bold">Audio</p>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />

                    <ul className="absolute left-full top-0 bg-white text-black mt-0 p-2 rounded-lg shadow-lg hidden group-hover:block">
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
                    <p className="font-bold">Gaming</p>
                  </a>
                </li>
                <li>
                  <li>
                    <a
                      href="#watch"
                      className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                    >
                      <p className="font-bold">Camera</p>
                    </a>
                  </li>
                  <a
                    href="#watch"
                    className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">Watch</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#tv"
                    className="block py-2 px-4 rounded-lg text-slate-600  hover:bg-white hover:text-[#009FBD]"
                  >
                    <p className="font-bold">TV</p>
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Sales Card */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Sales</h2>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-24 h-24 rounded-md"
              />
              <div>
                <p className="font-bold text-slate-600  hover:bg-white hover:text-[#009FBD]">
                  Canon EO...
                </p>
                <p className="text-sm line-through text-slate-600">$59.99</p>
                <p className="text-sm text-[#009FBD]">$49.99</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-24 h-24 rounded-md"
              />

              <div>
                <p className="font-bold text-slate-600  hover:bg-white hover:text-[#009FBD]">
                  HP...
                </p>
                <p className="text-sm line-through text-slate-600">$59.99</p>
                <p className="text-sm text-[#009FBD]">$49.99</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-24 h-24 rounded-md"
              />

              <div>
                <p className="font-bold text-slate-600  hover:bg-white hover:text-[#009FBD]">
                  MacBook...
                </p>
                <p className="text-sm line-through text-slate-600">$59.99</p>
                <p className="text-sm text-[#009FBD]">$49.99</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-24 h-24 rounded-md"
              />
              <div>
                <p className="font-bold text-slate-600  hover:bg-white hover:text-[#009FBD]">
                  Samsung...
                </p>
                <p className="text-sm line-through text-slate-600">$59.99</p>
                <p className="text-sm text-[#009FBD]">$49.99</p>
              </div>
            </div>
            <br />

            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-24 h-24 rounded-md"
              />

              <div>
                <p className="font-bold text-slate-600  hover:bg-white hover:text-[#009FBD]">
                  Iphone 11...
                </p>
                <p className="text-sm line-through text-slate-600">$59.99</p>
                <p className="text-sm text-[#009FBD]">$49.99</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold">Simple Card</h2>
            <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
              <p className="text-gray-600">4x4</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/5 md:ml-4">
          {/* Slider */}
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Slider</h2>
            <div className="relative h-96 flex items-center justify-center overflow-hidden bg-blue-300">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Slider"
                className="object-cover h-full w-full"
              />
              <p className="absolute text-2xl text-white">Slide Content</p>
            </div>
          </div>

          {/* Trending Products */}
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Trending Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Side - First Four Items */}
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                  </div>
                </div>
                {/* More Product Items */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 2"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">HP Laptop</p>
                    <p className="text-sm text-gray-500">Laptop</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 3"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Sony Headphones</p>
                    <p className="text-sm text-gray-500">Audio</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 3"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Sony Headphones</p>
                    <p className="text-sm text-gray-500">Audio</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 3"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Sony Headphones</p>
                    <p className="text-sm text-gray-500">Audio</p>
                  </div>
                </div>
                {/* Add more items here */}
              </div>
              {/* Right Side - Remaining Items */}
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 3"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Sony Headphones</p>
                    <p className="text-sm text-gray-500">Audio</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 3"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Sony Headphones</p>
                    <p className="text-sm text-gray-500">Audio</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 3"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Sony Headphones</p>
                    <p className="text-sm text-gray-500">Audio</p>
                  </div>
                </div>
                {/* More Product Items */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 4"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Apple Watch</p>
                    <p className="text-sm text-gray-500">Wearable</p>
                  </div>
                </div>
                {/* Add more items here */}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 mb-4">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold mb-4">Replacement Parts</h2>

              <a href="#refrigerator-parts" className="text-slate-500">
                Refrigerator Parts
              </a>
              <a href="#tv-parts" className="text-slate-500">
                TV Parts
              </a>
              <a href="#washing-machine-parts" className="text-slate-500">
                Washing Machine Parts
              </a>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Part 1"
                  className="w-24 h-24 rounded-md"
                />
                <div>
                  <p className="font-bold text-slate-600">
                    Refrigerator Part 1
                  </p>
                  <p className="text-sm text-gray-500">$50.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Part 1"
                  className="w-24 h-24 rounded-md"
                />
                <div>
                  <p className="font-bold text-slate-600">
                    Refrigerator Part 1
                  </p>
                  <p className="text-sm text-gray-500">$50.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Part 1"
                  className="w-24 h-24 rounded-md"
                />
                <div>
                  <p className="font-bold text-slate-600">
                    Refrigerator Part 1
                  </p>
                  <p className="text-sm text-gray-500">$50.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Part 1"
                  className="w-24 h-24 rounded-md"
                />
                <div>
                  <p className="font-bold text-slate-600">
                    Refrigerator Part 1
                  </p>
                  <p className="text-sm text-gray-500">$50.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Part 1"
                  className="w-24 h-24 rounded-md"
                />
                <div>
                  <p className="font-bold text-slate-600">
                    Refrigerator Part 1
                  </p>
                  <p className="text-sm text-gray-500">$50.00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Part 2"
                  className="w-24 h-24 rounded-md"
                />
                <div>
                  <p className="font-bold text-slate-600">
                    Refrigerator Part 2
                  </p>
                  <p className="text-sm text-gray-500">$60.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Part 3"
                  className="w-24 h-24 rounded-md"
                />
                <div>
                  <p className="font-bold text-slate-600">TV Part 1</p>
                  <p className="text-sm text-gray-500">$30.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Part 4"
                  className="w-24 h-24 rounded-md"
                />
                <div>
                  <p className="font-bold text-slate-600">
                    Washing Machine Part 1
                  </p>
                  <p className="text-sm text-gray-500">$45.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mb-4 animate-slide-in-left">
            <h2 className="text-xl font-bold mb-4">Appliance</h2>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Appliance"
                className="w-24 h-24 rounded-md"
              />
              <div>
                <p className="font-bold text-slate-600">Appliance Item</p>
                <p className="text-sm text-gray-500">$100.00</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Phone and Computing</h2>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Phone and Computing"
                className="w-24 h-24 rounded-md"
              />
              <div>
                <p className="font-bold text-slate-600">Phone Item</p>
                <p className="text-sm text-gray-500">$200.00</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Accessories</h2>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Accessories"
                className="w-24 h-24 rounded-md"
              />
              <div>
                <p className="font-bold text-slate-600">Accessory Item</p>
                <p className="text-sm text-gray-500">$15.00</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Camera</h2>
            <div className="grid grid-rows-1 md:grid-cols-4 gap-3">
              {/* Left Side - First Four Items */}
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className=" text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                    <p className="text-sm text-gray-500">1200</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {/* Product Item */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product 1"
                    className="w-24 h-24 rounded-md"
                  />
                  <div>
                    <p className="font-bold text-slate-600">Canon EOS</p>
                    <p className="text-sm text-gray-500">Camera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advertisement */}
        <div className="md:w-1/5 bg-white p-4">
          <h2 className="text-xl font-bold mb-4">Advertisement</h2>

          <div className="bg-white shadow-md rounded-lg p-2 h-auto">
            <h3 className="text-lg font-bold">Ad Title</h3>
            <p className="mt-1 text-sm">
              This is an advertisement. Check out this amazing product!
            </p>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              commodo justo nec varius feugiat.
            </p>
            <p className="mt-2 text-sm">
              Vivamus gravida posuere dui sit amet lacinia. Cras non eros sit
              amet risus malesuada vestibulum.
            </p>
          </div>
          <br />
          <div className="bg-white shadow-md rounded-lg p-2 h-auto mb-4">
            <h3 className="text-lg font-bold">Ad Title</h3>
            <p className="mt-1 text-sm">
              This is an advertisement. Check out this amazing product!
            </p>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              commodo justo nec varius feugiat.
            </p>
            <p className="mt-2 text-sm">
              Vivamus gravida posuere dui sit amet lacinia. Cras non eros sit
              amet risus malesuada vestibulum.
            </p>
          </div>
          <br />
          <div className="bg-white shadow-md rounded-lg p-2 h-auto mb-4">
            <h3 className="text-lg font-bold">Ad Title</h3>
            <p className="mt-1 text-sm">
              This is an advertisement. Check out this amazing product!
            </p>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              commodo justo nec varius feugiat.
            </p>
            <p className="mt-2 text-sm">
              Vivamus gravida posuere dui sit amet lacinia. Cras non eros sit
              amet risus malesuada vestibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
