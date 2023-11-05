import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function View_7() {
    const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define the animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Trigger the animation when the element is in the viewport
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <div className="container-fluid mt-5 mb-5 d-flex justify-content-center align-item-center" style={{height : "50vh"}}>
        <motion.h1 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}  
        className="display-4 mt-5 mb-5 text-center text-black ls">Become part of our mission.<br />And start <a className="fw-bold link-2 link-3-hover link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover text-black">investing</a></motion.h1>
    </div>
  )
}
