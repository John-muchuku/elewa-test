import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Part_4() {

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
    <div className="container-fluid d-flex justify-content-center align-item-center">
       <motion.div 
         ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}      
       className="container">
        <div className="row p-5 mt-5">
            <div className="col-6">
            <img className="w-75 rounded-4" src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"/>
            </div>

            <div className="col-6 text-black ">
                  
                  <div className="mt-5">
                 <h2 className="display-4">Beyond business</h2>
                 <p className="fs-4">
                    We channel a good amount of our resources into giving back.
                </p>
                <p className="fs-4">
                    Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers
                </p>
                
              </div>
            </div>
        </div>
  </motion.div>
  </div>

  )
}
