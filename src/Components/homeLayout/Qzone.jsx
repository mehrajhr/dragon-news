import React from 'react';
import swimingImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playImage from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-5'>
            <h1 className='font-bold text-2xl'>Qzone </h1>
            <div>
                <img src={swimingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;