import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import LinkButton from "./LinkButton";
import { ShoppingBag } from "@/data/allSvgs";
import { Button } from "@nextui-org/react";

const CustomModal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-[#FAF1DC]  dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                {title}
              </h2>
              <div className="mb-8">{children}</div>
              <div className="flex justify-end space-x-4">
                <LinkButton href="/login" text={"Log in"} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LoginModalReview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full h-full relative">
      <div className="adreview-btn flex justify-end">
        <Button
          onClick={openModal}
          className="GeneralSans text-lg font-medium rounded-full bg-black py-7 px-5 text-gray-100 cursor-pointer"
        >
          Write Review
        </Button>
      </div>
      <CustomModal isOpen={isOpen} onClose={closeModal} title="Login Required">
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          You need to be logged in to add items to your cart. Please log in or
          create an account to continue.
        </p>
      </CustomModal>
    </div>
  );
};

export default LoginModalReview;
