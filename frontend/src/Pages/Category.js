
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SalesCard from "./SalesCard";
import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const fetchCategoryProduct = async () => {
        setLoading(true);
        const response = await fetch(SummaryApi.categoryWiseProduct.url);
        const dataResponse = await response.json();
        setLoading(false);
        setCategoryProduct(dataResponse.data);
    };

    useEffect(() => {
        fetchCategoryProduct();
    }, []);

    // Handle click on a category like "Airpods"
    const handleCategoryClick = (category) => {
        navigate(`/category-product?category=${category}`);
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
                            <button
                                onClick={() => handleCategoryClick('Airpodes')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Airpodes</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Camera')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Camera</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Earphones')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Earphones</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Earphones')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Mobile</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Earphones')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Mouse</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Earphones')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Printer</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Earphones')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Processor</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Earphones')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Trimmers</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Earphones')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Televisions</p>
                            </button>
                        </li>
                        <li className="relative group">
                            <button
                                onClick={() => handleCategoryClick('Earphones')}
                                className="block py-2 px-4 rounded-lg text-slate-600 flex items-center justify-between hover:bg-white hover:text-[#009FBD]"
                            >
                                <p className="font-bold">Watches</p>
                            </button>
                        </li>
                        {/* Add more categories here */}
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
    );
};

export default Category;

