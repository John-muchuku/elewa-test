import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function View_2() {
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
    <div className="container-fluid d-flex justify-content-center align-item-center">
        <motion.div 
         ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}       
        className="container d-flex justify-content-center align-item-center mt-4 mb-4" >
        <div className="row mt-5">


          <div className="col-md-6 text-black ">
                  
                  <div className="mt-6 ms-5">
                 <h2 className="display-4 mt-5">How we see it differently</h2>
                 <p className="fs-4 mt-4">
                    The global South is rapidly catching up with the "developed" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond).
                </p>
              </div>
         </div>

            <div className="col-md-6 d-flex justify-content-center align-item-center">
            <img className="w-75 rounded-4" src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"/>
            </div>

            
            
        </div>
        </motion.div>
  </div>
  )
}
