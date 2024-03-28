import React from 'react';

const Awareness = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About E-WASTE 
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          The programme aims to create effective awareness in various levels (of society) to reduce the adverse impact on environment and health arising out of the polluting technologies used in recycling e-waste in the unorganized sector.
        </p>
        {/*  Line */}
        <div className="w-20 h-px bg-gray-500 mx-auto mt-8"></div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 text-center">
  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
    Our Mission
  </h2>
  <p className="mt-4 text-lg text-gray-600">
    Safe and Easy e-waste Managemnt for a better Evnironment.<br />
    The charter for this programme is to bring together the triad of public, government and industry to adopt responsible measures for Sustainable electronics that is responsive to environmental needs. This needs proactive policy formation and mass deployment that would be the focus area.
  </p>
  {/* Line */}
  <div className="w-20 h-px bg-gray-500 mx-auto mt-8"></div>
</div>

    </div>
  );
};

export default Awareness;