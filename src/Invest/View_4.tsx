import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function View_4() {
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
        className="row p-5 mt-5">
            <div className="col-md-6 d-flex justify-content-center align-item-center">
            <img className="w-75 rounded-4" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"/>
            </div>

            <div className="col-md-6 text-white">
                  
                  <div className="mt-6 text-black">
                 <h2 className="display-4">Elewa NV, a multi-stakeholder cooperation</h2>
                 <p className="fs-4 ">
                    At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.
                </p>
                <p className="fs-4">
                   Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group.
                </p>
              </div>
            </div>
        </motion.div>
  </div>
  )
}
