import { motion } from 'framer-motion';

export default function Part_1() {
  return (
    <div >
      <div className="z-0">
        <img src="/images/3.jpg" className="d-block elewa-team" />
      </div>

      <div className="z-1 position-absolute about-txt text-white">
        <motion.p 
        initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale down
        animate={{ opacity: 1, scale: 1 }} // Animate to opacity 1 and scale 1 (original size)
        exit={{ opacity: 0, scale: 0.5 }} // Exit animation, scale down and fade out
        transition={{ duration: 0.5 }} 
        className="fs-6">Scaling impact. Beyond the norm</motion.p>
        <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale down
        animate={{ opacity: 1, scale: 1 }} // Animate to opacity 1 and scale 1 (original size)
        exit={{ opacity: 0, scale: 0.5 }} // Exit animation, scale down and fade out
        transition={{ duration: 1 }} 
        className="txt-f1 display-4 mt-4">Human and Environmental Impact<br></br>through Social Enterprise</motion.h1>
        
      </div>

    </div>
  )
}
