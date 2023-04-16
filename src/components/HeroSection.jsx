import { useState, useEffect } from 'react';
import PlayStoreButton from '../svgs/playstore.svg';
import AppStoreButton from '../svgs/appstore.svg';
import Wave from '../svgs/wave.svg';
import WaveMobile from '../svgs/workpal-wave-mobile.svg';
import RobotPal from '../svgs/robotpal.svg';

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='py-[10px] flex flex-col justify-center lg:flex-row lg:justify-between'>
      {/* Content */}
      <div className='flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:w-1/2'>
        <h1 className='text-primary-one font-bold text-[28px] lg:font-extraBold lg:text-[36px]'>
          Maximize Productivity With Your AI Assistant
        </h1>
        <p className='font-regular mt-[18px]'>
          Forget about forgetting, let WorkPal be your note-taking assistant for in-person meetings
        </p>
        <button className='text-center font-semiBold py-[18px] px-[40px] rounded-xl bg-secondary text-white-0 mt-[32px]'>
          Download Proposal
        </button>
        <div className='flex flex-col gap-1 items-center justify-center mt-[28px] lg:flex-row md:flex-row'>
          <img src={PlayStoreButton} alt='Playstore Download' className='cursor-pointer' />
          <img src={AppStoreButton} alt='Appstore Download' className='cursor-pointer' />
        </div>
      </div>
      {/* Robotpal */}
      <div className='relative h-[400px] lg:w-1/2'>
        {isMobile ? (
          <img src={WaveMobile} alt='Workpal Wave' className='absolute inset-0 mx-auto my-14' />
        ) : (
          <img src={Wave} alt='Wave' className='absolute inset-36 -translate-x-44 mx-auto my-14' />
        )}
        <img
          src={RobotPal}
          alt='Robotpal On A Phone'
          className='absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:-translate-y-36 z-10 max-h-[400px] w-full'
        />
      </div>
    </section>
  );
};
