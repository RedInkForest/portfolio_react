import React from 'react';
import timeline from '../Data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col items-start justify-center my-20"> {/* Ensure items are left-aligned */}
         <div className="w-full md:w-7/12">
           
            {timeline.map((item, index) => (
               <TimelineItem 
                  key={index}
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   );
}

export default Timeline;
