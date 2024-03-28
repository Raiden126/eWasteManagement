import React from 'react';

const Content = () => {
  return (
    <div 
      className="bg-cover py-8 md:py-10 lg:py-12" // Adjust padding for responsiveness
      style={{ 
        backgroundImage: "url('/Banner.jpg')",
        height: "40vh", // Adjust the height as needed
        
      }}
    >
      {/* Content within the component */}
    </div>
  );
};

export default Content;