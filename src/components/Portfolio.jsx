import React from 'react';
import portfolio from '../Data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';
function Portfolio() {
   return (
    
      <div className="flex flex-col md:flex-row items-center justify-center p-8 mb-20"> {/* Added mb-20 for bottom margin */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map(project => (
               <PortfolioItem 
                  key={project.title}
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   );
}

export default Portfolio;
