import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


export default function Section_2() {

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
    <div className="container-fluid rounded-bottom-5">
    <motion.div 
    ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}
    className="container mt-5">
        <h1 className=" mt-4 display-4 text-black fw-bold">We Care!</h1>

        <div className="row d-flex ">
            <div className="col-md-6 fs-4 p-4">
                Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.
            </div>

            <div className="col-md-6 fs-4 p-4">
                Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.
            </div>
        </div>

        <div className="row d-flex mt-5 mt-5">
            <div className="col-md-4">
                <img className="w-50 " src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png"/> 
                <h2 className="mt-4">Holistic solutions</h2>
                <p className="fs-5">We go beyond a simple patch-up but develop lasting solutions through holistic design.</p>
            </div>

            <div className="col-md-4 mt-3">
                <img className="w-25" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png"/>
                <h2>Impact</h2>
                <p className="fs-5">Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.</p>
            </div>

            <div className="col-md-4 ">
                <img className='w-25' src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png"/>
                <h2 >Open data</h2>
                <p className="fs-5">Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</p>
            </div>

        </div>
    </motion.div>
  </div>    
  )
}
