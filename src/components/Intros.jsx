import React from 'react';

function Intro() {
   return (
      <div className="h-screen flex items-center justify-center flex-col text-center">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Hi there! My name is</h1>
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Ethan Pradhan</h1>
         <p className="text-base md:text-xl mb-3 font-medium">a Full Stack Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            {/* Add any additional information here if needed */}
         </p>
         <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.27/build/spline-viewer.js"></script>
         <spline-viewer url="https://prod.spline.design/4BlHqijWfr5DCC2O/scene.splinecode"></spline-viewer>
      </div>
   );
}

export default Intro;
