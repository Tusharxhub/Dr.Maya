import { motion } from 'framer-motion'
import React from 'react'



const ToggleMenu = ({open,handleToggle}: {open: boolean, handleToggle: () => void}) => {


  return (
   <div className="relative w-10 h-4 flex items-center justify-center" onClick={handleToggle}>
  <motion.div
    animate={{ rotate: open ? 45 : 0, y: open ? 0 : -4 }}
    transition={{ duration: 0.3 }}
    className="absolute w-7 h-[0.1px] bg-black"
  />

  <motion.div
    animate={{ rotate: open ? -45 : 0, y: open ? 0 : 4 }}
    transition={{ duration: 0.3 }}
    className="absolute w-7 h-[0.1px] bg-black"
  />
</div>

  )
}

export default ToggleMenu
