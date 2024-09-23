import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90 m-4"
      >
         <img
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-28 md:h-32 object-cover cursor-pointer"
         />
         <div className="w-full p-4">
            <h3 className="text-sm md:text-lg text-slate-300 dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
               {stack.map((item, index) => (
                  <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 text-neutral-100 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   );
}

export default PortfolioItem;
