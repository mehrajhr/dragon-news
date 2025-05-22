import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUsOn from './FindUsOn';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;