// Cards.tsx

import React, { useState } from 'react';

const imageData = [
{
    id: 1,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg',
    alt: 'Image 1',
    name: 'Jente Elewa',
    description: 'Founder, Managing Partner',
  },

{
    id: 2,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg',
    alt: 'Image 2',
    name: 'Kennedy Adhola',
    description: 'Operations & Partnerships',
  },

  {
    id: 3,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg',
    alt: 'Image 3',
    name: 'Peter Reinartz',
    description: 'Executive Chairman',
  },

  {
    id: 4,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg',
    alt: 'Image 4',
    name: 'Noella Mwanzia',
    description: 'Software Engineer',
  },

  {
    id: 5,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg',
    alt: 'Image 1',
    name: 'Ian Odhiambo',
    description: 'Founder Kujali',
  },

  {
    id: 6,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/jane-elewa_yyybka.jpg',
    alt: 'Image 6',
    name: 'Jane Njoroge',
    description: 'Software Engineer',
  },

  {
    id: 7,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679657743/elewa-group-website/elewa-team-members/shawn-elewa_tt3iit.jpg',
    alt: 'Image 7',
    name: 'Shawn Chiama',
    description: 'Software Engineer',
  },

  {
    id: 8,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_800/v1679984133/elewa-group-website/elewa-team-members/joy_gvbweu.jpg',
    alt: 'Image 8',
    name: 'Joy-Lidah Wawira',
    description: 'Software Engineer',
  },

  {
    id: 9,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/reagan-elewa_bn8xkl.jpg',
    alt: 'Image 9',
    name: 'Reagan Charana',
    description: 'Software Engineer',
  },

  {
    id: 10,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679666201/elewa-group-website/elewa-team-members/chesa-elewa_soeb8f.jpg',
    alt: 'Image 10',
    name: 'Paul Chesa',
    description: 'Software Engineer',
  },

  {
    id: 11,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,h_1000/v1682586211/IMG_9755_vfprhm.jpg',
    alt: 'Image 1',
    name: 'Lynn Anastasia',
    description: 'Software Engineer',
  },

  {
    id: 12,
    src: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679985792/elewa-group-website/elewa-team-members/lemmy_oosngt.jpg',
    alt: 'Image 1',
    name: 'Stephen Mwaura',
    description: 'Software Engineer',
  },

  





];

const Cards: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imageData.length - 1));
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex < imageData.length - 1 ? prevIndex + 1 : 0));
  };

  const cardRowStyle = {
    transform: `translateX(-${currentCardIndex * 310}px)`, // Adjust the value based on card width
  };

  return (
    <div className="container-fluid mt-5 mb-5 bg-black p-5">
      <h4 className='display-5 text-white ls mb-5'>Team |<span className='text-secondary'> Management</span></h4>
      <div className="card-container">
        <div className="card-row" style={cardRowStyle}>
          {imageData.map((data, index) => (
             <div key={data.id}>
            <div className="card">
              <img src={data.src} alt={data.alt} />
              
            </div>
   <div className="text-white">
                <h3 className='fs-2 ml-2'><a className='link-2 link-3-hover link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-white'>{data.name}</a></h3> {/* Add the name property to your image data */}
                <p className='fs4'><a className=''></a>{data.description}</p> {/* Add the description property to your image data */}
              </div>         
          </div>
          ))}
        </div>
      </div>

   <div className=" mt-4 d-flex ms-auto">
      <div className="p-2" onClick={handlePrevCard}> 
        <img className='border border-white rounded-circle wi' src='./images/next 2.png'/>
         </div>
           <div className="p-2" onClick={handleNextCard}>
            <img className='border border-white rounded-circle wi' src='./images/next 1.png'/>
          </div>
    </div>

  <div className="text-white border-2">
  <hr/>
</div>
  
    </div>
  );
};

export default Cards;


