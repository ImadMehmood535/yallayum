import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log('Searching for:', searchQuery);
    closeModal();
  };

  return (
    <>
      <button onClick={openModal} className="focus:outline-none">
        <CiSearch className="text-white w-5 h-5 hover:scale-110 transition-transform" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-start justify-center pt-20"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="w-full max-w-3xl px-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-transparent text-white text-4xl border-b-2 border-white py-2 px-4 focus:outline-none placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
                >
                  <CiSearch className="w-8 h-8" />
                </button>
              </form>
              <div className="mt-8 text-gray-400">
                <h3 className="text-xl mb-2">Popular Searches:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Products', 'Categories', 'Deals', 'New Arrivals'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setSearchQuery(item)}
                      className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              >
                <IoMdClose className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchModal;