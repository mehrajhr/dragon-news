import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='p-3 bg-base-200 flex gap-4 items-center'>
           <p className='text-base-100 bg-secondary p-3 '>Latest</p>
          <Marquee className='flex gap-5' pauseOnHover={true}>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus porro nihil,</p>
              <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus porro nihil,</p>
               <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus porro nihil,</p>
          </Marquee>
        </div>
    );
};

export default LatestNews;