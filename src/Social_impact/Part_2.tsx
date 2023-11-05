import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NumberAnimation from './NumberAnimation'; // Import the NumberAnimation component

export default function Part_2() {
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
    <div className="container-fluid bg-black p-5">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}
        className="container"
      >
        <div className="text-center d-flex text-white gap-5 justify-content-center align-item-center mt-4">
          <div>
               <h1 className='display-4' style={{ display: 'flex', alignItems: 'center' }}>
                <NumberAnimation endValue={733} />
                 <span style={{ marginLeft: '0.5rem' }}>+</span>
              </h1>           
            <h4>People trained</h4>
          </div>

          <div>
            <h1 className='display-4' style={{ display: 'flex', alignItems: 'center' }}>
            <NumberAnimation endValue={733} />
            <span style={{ marginLeft: '0.5rem' }}>K</span>
            </h1>
            <h4>careers launched</h4>
          </div>

          <div>
            <div>
              <h1 className='display-4' style={{ display: 'flex', alignItems: 'center' }}>
                <NumberAnimation endValue={200} />
                 <span style={{ marginLeft: '0.5rem' }}>+</span>
              </h1>
            </div>
            <h4>Projects finished</h4>
          </div>
          <div>
            <h1 className='display-4'>
              <NumberAnimation endValue={56} /></h1>
            <h4>Investors</h4>
          </div>
        </div>
        <div className="container">
          <div className="row p-5 mt-5">
            <div className="col-6">
              <img
                className="w-75 rounded-4"
                src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
                alt="Lady Impact"
              />
            </div>

            <div className="col-6 text-white">
              <div className="mt-6">
                <h2 className="display-4">(Social) business for, the win</h2>
                <p className="fs-4">
                  With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive, and scalable business. The rest will take care of itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
