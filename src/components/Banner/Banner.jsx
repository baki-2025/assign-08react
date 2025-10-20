import React from 'react';
import heroimg from '../../assets/hero.png'
import googleplay from '../../assets/googleplay.png'

import { FaAppStoreIos } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-gray-200 text-black justify-items-center'>
            <div className='justify-center'>
                <h1 className='text-6xl text-center font-bold p-6'> We Build<br /><span className='text-violet-500'>Productive</span> Apps</h1>
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-4 p-6 '>
                    <button className=' gap-3 bg-white shadow-md border border-gray-300 rounded-xl w-[200px] h-[56px] hover:shadow-lg transition w-[200px] h-[56px]  flex items-center justify-center '> <img src={googleplay} alt="Google Play" className="w-6 h-6" />
                        <span className="font-semibold">Google Play</span>
                    </button>

                          <button className="flex items-center justify-center gap-3 bg-white shadow-md border border-gray-300 rounded-xl w-[200px] h-[56px] hover:shadow-lg transition">
              <FaAppStoreIos className="text-2xl align-middle" />
              <span className="font-semibold">App Store</span>
            </button>
                </div>
            </div>
            <img src={heroimg} alt="" />
        </div>
    );
};

export default Banner;


