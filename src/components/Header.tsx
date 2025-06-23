import React from 'react';
import Button from './ui/Button';

const Header: React.FC = () => {
  // Function to navigate to home page
  const goToHome = () => {
    window.location.href = '/';
  };

  // Function to navigate to landing page
  const goToLanding = () => {
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-sm py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={goToHome} className="focus:outline-none">
            <img
              src="/tga.jpeg"
              alt="TGA Logo"
              className="w-[216px] h-[48px] rounded-lg object-cover"
            />
          </button>
        </div>
        <div className="hidden md:block">
          <Button
            variant="primary"
            onClick={goToLanding}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;