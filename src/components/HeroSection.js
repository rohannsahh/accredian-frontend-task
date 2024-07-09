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
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
          <nav className="flex justify-between w-full py-4 bg-white shadow-lg px-8 rounded-lg mb-6">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-800 hover:text-blue-600">Refer</a>
              <a href="/" className="text-gray-800 hover:text-blue-600">Benefits</a>
              <a href="/" className="text-gray-800 hover:text-blue-600">FAQs</a>
              <a href="/" className="text-gray-800 hover:text-blue-600">Support</a>
            </div>
          </nav>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Let's Learn & Earn</h1>
              <p className="text-lg text-gray-600">Get a chance to win up to <span className="text-blue-600 font-bold">Rs. 15,000</span></p>
            </div>
            <div className="flex flex-col items-center">
              <img src={require('../assets/image.png')} alt="Refer & Earn" className="mb-6 w-full max-w-sm h-auto" />
              <button  onClick={openModal} 
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Refer Now
              </button>
            </div>
          </div>
          <ReferralModal isOpen={isModalOpen} onClose={closeModal} />

        </div>
      );
}

export default HeroSection
 


