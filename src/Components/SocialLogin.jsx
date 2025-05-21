import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold'>Login with</h1>
            <div className='space-y-3 mt-3'>
                <button className='btn w-full btn-outline btn-secondary'>  <FcGoogle size={24} /> Login With Google</button>
                <button className='btn w-full btn-outline btn-secondary'><BsGithub size={24} /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;