import { motion } from 'framer-motion';

export default function Section_1() {
  return (
    <div >
      <div className="z-0">
        <img src="/images/elewa-team.jpg" className="d-block elewa-team" />
      </div>

      <div className="z-1 position-absolute about-txt text-white">
        <motion.h4
        initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale down
        animate={{ opacity: 1, scale: 1 }} // Animate to opacity 1 and scale 1 (original size)
        exit={{ opacity: 0, scale: 0.5 }} // Exit animation, scale down and fade out
        transition={{ duration: 0.5 }}
         className="fs-6">HOW TO RECOGNIZE AN ELEWA MEMBER</motion.h4>
        <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale down
        animate={{ opacity: 1, scale: 1 }} // Animate to opacity 1 and scale 1 (original size)
        exit={{ opacity: 0, scale: 0.5 }} // Exit animation, scale down and fade out
        transition={{ duration: 1 }}
        className="txt-f1 display-4 mt-4 mb-5">Dependable, Creative, Supportive,<br></br> Open Minded and Fun*</motion.h1>
        <motion.h4 
        initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale down
        animate={{ opacity: 1, scale: 1 }} // Animate to opacity 1 and scale 1 (original size)
        exit={{ opacity: 0, scale: 0.5 }} // Exit animation, scale down and fade out
        transition={{ duration: 1.5 }}
        className="fw-bold fs-6 txt-f4 mt-5">*SERIOUS WHEN IT MATTERS</motion.h4>
      </div>

    </div>
  )
}
