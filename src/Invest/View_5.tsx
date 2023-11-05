import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function View_5() {
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
        className="row p-5 mt-5 ms-5">

                     <div className="col-md-6 mt-5">
                  
                  <div className="mt-md-6 text-black">
                 <h2 className="display-4">The Elewa Creative Hub</h2>
                 <p className="fs-5">
                    Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.
                </p>
                <p className="fs-5">
                    Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation.
                </p>
              </div>
            </div>
            

        <div className="col-md-6 d-flex justify-content-center align-item-center">
            <img className="w-75 rounded-4" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg"/>
            </div>

          </motion.div>   
  </div>
  )
}
