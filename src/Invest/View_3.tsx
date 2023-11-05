import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function View_3() {
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
    
    <div className="container-fluid d-flex justify-content-center align-item-center mt-5 mb-5">
        <motion.div 
          ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}       
        className="row p-1">
            <h4 className="text-center display-5 text-black mb-5">Key figures</h4>
            <div className="col-md-3 text-center p-4 border border-secondary rounded-4">
                <h1 className="fw-bold mt-5 mb-4 text-black">1.3<span className="fs-5">M</span></h1>
                <p className="fs-5">Approx. number of Kenyan talents reaching the age of 18 in 2022</p>
            </div>

            <div className="col-md-3 text-center p-4 border border-secondary rounded-4">
                <h1 className="fw-bold mt-5 mb-4 text-black">5<span className="fs-5">M</span></h1>
                <p className="fs-5">number of East-Africans(EAC) reaching the age of 18 in 2022</p>
            </div>

            <div className="col-md-3 text-center p-4 border border-secondary rounded-4">
                <h1 className="fw-bold mt-5 mb-4 text-black">2022</h1>
                <p className="fs-5">Democratic Republic of Congo joins the East African Community</p>
            </div>

            <div className="col-md-3 text-center p-4 border border-secondary rounded-4">
                <h1 className="fw-bold mt-5 mb-4 text-black">1.5<span className="fs-5">M</span></h1>
                <p className="fs-5">The number of unfilled IT vacancies in the US and EU markets</p>
            </div>

            <div className="col-md-3 text-center p-4 border border-secondary rounded-4">
                <h1 className="fw-bold mt-5 mb-4 text-black">10<span className="fs-5">M</span></h1>
                <p className="fs-5">Number of technical vacancies by 2030</p>
            </div>

            <div className="col-md-3 text-center p-4 border border-secondary rounded-4">
                <h1 className="fw-bold mt-5 mb-4 text-black">2050</h1>
                <p className="fs-5">Africa holds the worlds largest workforce</p>
            </div>

            <div className="col-md-3 text-center p-4 border border-secondary rounded-4">
                <h1 className="fw-bold mt-5 mb-4 text-black">$4.6<span className="fs-5">M</span></h1>
                <p className="fs-5">Startup funding raised by African startups in 2022</p>
            </div>

            <div className="col-md-3 text-center p-4 border border-secondary rounded-4">
                <h1 className="fw-bold mt-5 mb-4 text-black">310<span className="fs-5">%</span></h1>
                <p className="fs-5">ncrease in startup funding for companies with HQ in Kenya</p>

            </div>
        </motion.div>
    </div>
  )
}
