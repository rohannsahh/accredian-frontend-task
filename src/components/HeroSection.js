import React, { useState } from 'react'
import ReferralModal from './ReferralModal';


const HeroSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };  
    return (
        <div className="flex flex-col items-center justify-center min-h-[95vh] bg-white p-4">
          <nav className="flex justify-around w-full max-w-sm py-4 bg-blue-50 shadow-lg px-8 rounded-xl mb-6">
            <div className="flex items-center space-x-10">
              <a href="/" className="text-gray-800 hover:text-blue-600">Refer</a>
              <a href="/" className="text-gray-800 hover:text-blue-600">Benefits</a>
              <a href="/" className="text-gray-800 hover:text-blue-600">FAQs</a>
              <a href="/" className="text-gray-800 hover:text-blue-600">Support</a>
            </div>
          </nav>
          <div className="flex  items-center justify-center max-h-[70vh] bg-[#EEF5FF] rounded-lg shadow-lg p-6 max-w-5xl w-full">
            <div className=" mb-10">
             <div className='p-10'>
             <h1 className="text-6xl font-bold text-gray-800 mb-4">Let's Learn & Earn</h1>
             <p className="text-3xl my-8 text-gray-600">Get a chance to win up to <span className="text-blue-600 font-bold">Rs. 15,000</span></p>
                </div> 
             <div className='px-10 my-6'>
             <button  onClick={openModal} 
              className="bg-blue-600  text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Refer Now
              </button>
                </div> 
            </div>
            <div className=" ">
              <img src={require('../assets/image.png')} alt="Refer & Earn" className="  max-w-lg " />
            
            </div>
          </div>
          <ReferralModal isOpen={isModalOpen} onClose={closeModal} />

        </div>
      );
}

export default HeroSection
 


