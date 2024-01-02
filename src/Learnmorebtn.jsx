import React, { useState } from 'react';

const Learnmorebtn = ({ title, description, technologies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-black font-light py-2 px-4 rounded-sm"
        onClick={openModal}
      >
        Learn More
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <div className="bg-gray-700 p-8 rounded-md max-w-md">
          <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-emerald-600">{technologies}</p>
      <p className="text-left font-light">{description}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-black font-light py-2 px-4 rounded-sm"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learnmorebtn;
