import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


export default function Section_5 () {
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
            <img className="w-100 rounded-0"  style={{height: '85vh'}} src="./images/mp.jpg"/>
            </div>

            <div className="col-md-6 p-4">
                  
                  <div className="mt-5 text-black">
                 <h2 className="display-4 mt-2">Investing in Elewa NV</h2>
                 <p className="fs-4 ">
                    From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?
                </p>
               
               <div>
                <div className="button-container mt-5 ">
                  <button className="btno">
                  <span className="text">Get directions</span>
                   <span className="circle">{String.fromCodePoint(0x1F862)}</span>
                  </button>
                </div >
                </div>
                
              </div>
            </div>
        </motion.div>
  </div>

    )
}
