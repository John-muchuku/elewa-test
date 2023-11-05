import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


export default function Section_4() {

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
    <motion.div 
    ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}
    className="container mt-5">

        <div>
            <h1 className="display-5 text-black mt-4 ">Our Culture & Values</h1>
            <p className="fs-4 mt-5 mb-5">Our culture, CODE-(T), defines us. It protects and guides us<br></br>to success. It keeps our team and management accountable <br></br> to itself, its objective, and our long-term mission.</p>
        </div>

        {/* <div className="text-black">
            <hr/>
        </div> */}

        <div className="row d-flex justyfy-content-center align-item-center border-top border-black mb-5">

            <div className="col-md-6 border-bottom border-black">
                <div className="m-4">
               <img className="wt mb-4 mt-5" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png"/>
                <h2 className="fw-bold">Cooperative</h2>
                <p className="fs-5 mt-4">One for all ,all for one! We have a cooperative and<br></br>open mindset. If one of us grows, all will follow.</p>
                </div>
            </div>

            <div className="col-md-6 border-bottom border-black border-start">
          <div className="m-4">
               <img className="wt mb-4 mt-5" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png"/>
                <h2 className="fw-bold">Ownership</h2>
                <p className="fs-5 mt-4">We are dependable and honour our commitments. When things don't go as planned, as they sometimes do, we communicate early to avoid catastrophe.</p>
        </div>

            </div>

         <div className="col-md-6 border-bottom border-black">
         
           <div className="m-4">
               <img className="wt mb-4 mt-5" src="https://static.thenounproject.com/png/1721983-200.png"/>
                <h2 className="fw-bold">Detail</h2>
                <p className="fs-5 mt-4">We are a "Centre of Excellence" as per global standards. We only compete with ourselves, but find in the global standard our only worthy rival.</p>
         </div>

            </div>

         <div className="col-md-6 border-bottom border-black border-start">
            <div className="m-4">
               <img className="wt mb-4 mt-5" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png"/>
                <h2 className="fw-bold">Empathy</h2>
                <p className="fs-5 mt-4">We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need.</p>
        
            </div>
            </div>

        </div>


    <div className="row  justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
  <div className="col-md-12 text-center mb-5">
    <div className="">
  <img className="cirl" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Transparancy_fqal8q.png" alt="Image" />
    </div>
  </div>
  <div className="col-md-12">
    <h2 className="fw-bold text-center">Transparency</h2>
  </div>
  <div className="col-md-12">
    <p className="fs-5 m text-center">Transparency, an open mind, and an open heart hold our organization<br></br> together. We commit to and promote full transparency to ourselves, our<br></br> stakeholders, and our beneficiaries. We furthermore invest heavily in<br></br> open-source and open-data projects, as true potential lies everywhere.<br></br> Not just within.</p>
  </div>
</div>



          
    </motion.div>
  )
}
