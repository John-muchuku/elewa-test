import { motion } from 'framer-motion';

export default function View_1() {
  return (
    <div >
      <div className="z-0">
        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg" className="d-block elewa-team" />
      </div>

      <div className="z-1 position-absolute invest-txt text-white mb-5">
        <motion.p 
        initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale down
        animate={{ opacity: 1, scale: 1 }} // Animate to opacity 1 and scale 1 (original size)
        exit={{ opacity: 0, scale: 0.5 }} // Exit animation, scale down and fade out
        transition={{ duration: 0.5 }} 
        className="fs-6">Trade, not aid</motion.p>
        <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale down
        animate={{ opacity: 1, scale: 1 }} // Animate to opacity 1 and scale 1 (original size)
        exit={{ opacity: 0, scale: 0.5 }} // Exit animation, scale down and fade out
        transition={{ duration: 1 }} 
        className="txt-f1 display-4 mt-4">Southern innovations addressing<br/>global problems</motion.h1>
        
      </div>

    </div>
  )
}
