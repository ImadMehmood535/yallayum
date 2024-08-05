import { API } from "@/api";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const CustomAutocomplete = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [dummyProducts, setDummy] = useState([]);

  const getData = async () => {
    try {
      const response = await API.getProducts();
      setDummy(response?.data?.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = dummyProducts?.filter((product) =>
      product?.name?.toLowerCase()?.includes(value.toLowerCase())
    );
    setSuggestions(filtered ?? []);
  };

  const handleSearchClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSuggestionClick = (product) => {
    setInputValue(product?.name ?? "");
    setSuggestions([]);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center transition-all duration-300 ${
          isOpen ? "w-64" : "w-5"
        }`}
      >
        <CiSearch
          className="text-white w-6 h-6 hover:text-gray-300 cursor-pointer"
          onClick={handleSearchClick}
        />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search products..."
          className={`bg-transparent text-white placeholder-gray-300 text-sm font-medium outline-none transition-all duration-300 ${
            isOpen ? "w-full px-2" : "w-0"
          }`}
        />
      </div>
      {isOpen && suggestions?.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
          {suggestions.map((product) => (
            <Link
              key={product?.id}
              href={`/shop/${product?.slug}`}
              onClick={() => handleSuggestionClick(product)}
              className="block px-4 py-3 hover:bg-[#FAF7F4] transition-colors duration-150"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-medium truncate mr-2">
                  {product?.name}
                </span>
                <span className="text-gray-600 text-sm whitespace-nowrap">
                  ${product?.variation?.[0]?.salePrice?.toFixed(2)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomAutocomplete;