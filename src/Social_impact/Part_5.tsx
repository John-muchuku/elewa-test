import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Part_5() {
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
    <div className="container-fluid bg-black d-flex justify-content-center align-item-center rounded-top rounded-5">
        <motion.div 
         ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}         
        className="container d-flex justify-content-center align-item-center bg-black" >
        <div className="row mt-4 p-4">


          <div className="col-6 text-white ">
                  
                  <div className="mt-6 ms-5">
                 <h2 className="display-4 mt-5">Open knowledge</h2>
                 <p className="fs-4 mt-4">
                    What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships.
                </p>
                <p className="fs-4 mt-4">
                    We build for today, with a lens on tomorrow.
                </p>
              </div>
         </div>

            <div className="col-6 d-flex justify-content-center align-item-center">
            <img className="w-75 rounded-4" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"/>
            </div>

            
            
        </div>
        </motion.div>
  </div>
  )
}
