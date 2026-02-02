"use client";

import React, { useEffect, useState } from "react";
import ToggleMenu from "../icons/ToggleMenu";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

 
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <div className="h-[126px] w-full fixed flex justify-center items-start pt-5 md:pt-10 lg:h-[50px] lg:pt-3.5 z-50">
        <div className="h-[32px] w-[90vw] flex justify-between items-center">
          <div className="block lg:hidden">
            <ToggleMenu open={open} handleToggle={handleToggle} />
          </div>

          <div className="hidden lg:block font-gopher text-[var(--text-color)] text-3xl">
            <h1>Lilac Template</h1>
          </div>

          <div className="flex gap-3.5 font-gopher text-[var(--text-color)]">
            <div className="block lg:hidden text-lg">
              <h1>Lilac Template</h1>
            </div>
            <div className="hidden lg:flex gap-8 text-lg">
              <h1>Blog</h1>
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>

   
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-[60px] z-40 bg-[var(--primary-color)]
              font-gopher text-[var(--text-color)]
              justify-center
              flex flex-col items-center gap-4 
              text-[25px] md:text-[3vw]"
          >
            <motion.h1>Blog</motion.h1>
            <motion.h2>Contact</motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
