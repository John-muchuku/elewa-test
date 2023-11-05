import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Part_3() {

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
  }, [controls, inView])

  return (
    <div className="container-fluid bg-part-2 d-flex justify-content-center align-item-center">
        <motion.div 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}
        className="container d-flex justify-content-center align-item-center bg-part-2 mt-4 mb-4" >
        <div className="row mt-5">


          <div className="col-6 text-black ">
                  
                  <div className="mt-6 ms-5">
                 <h2 className="display-4 mt-5">A cooperative mindset</h2>
                 <p className="fs-4 mt-4">
                Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves. Internally, but also within the larger communities in which we are active.
                </p>
              </div>
         </div>

            <div className="col-6 d-flex justify-content-center align-item-center">
            <img className="w-75 rounded-4" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"/>
            </div>

            
            
        </div>
        </motion.div>
  </div>
  )
}
