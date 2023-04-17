import { useState, useEffect } from 'react';
import PlayStoreButton from '../svgs/playstore.svg';
import AppStoreButton from '../svgs/appstore.svg';
import Wave from '../svgs/wave.svg';
import WaveMobile from '../svgs/workpal-wave-mobile.svg';
import RobotPal from '../svgs/robotpal.svg';
import RobotpalWaving from '../images/robotpal-waving-hq.webp';
import { handleProposalClick } from '../utils';

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
        <button onClick={handleProposalClick} className='text-center font-semiBold py-[18px] px-[40px] rounded-xl bg-secondary text-white-0 mt-[32px]'>
          Download Proposal
        </button>
        <div className='flex flex-col gap-1 items-center justify-center mt-[28px] lg:flex-row md:flex-row lg:ml-[-10px]'>
          <img src={PlayStoreButton} alt='Playstore Download' className='cursor-pointer' />
          <img src={AppStoreButton} alt='Appstore Download' className='cursor-pointer' />
        </div>
      </div>
      {/* Robotpal */}
      <div className='relative h-[400px] w-full lg:w-1/2'>
        {isMobile ? (
          <img src={WaveMobile} alt='Workpal Wave' className='absolute inset-0 mx-auto my-14 w-full z-[-1]' />
        ) : (
          <img src={Wave} alt='Wave' className='absolute inset-36 -translate-x-44 mx-auto my-14 z-[-1]' />
        )}
        <div className='grid grid-cols-1 grid-rows-1 place-items-center max-w-[400px] mx-auto mt-[5%]'>
          <img
            src={RobotPal}
            alt='Robotpal On A Phone'
            className='col-start-1 row-start-1 col-end-1 row-end-1 mt-10 z-100'
          />
          <img
            src={RobotpalWaving}
            alt='Robotpal Waving'
            className='col-start-1 row-start-1 col-end-1 row-end-1 w-1/2 mb-[50%] mr-[10%] z-200'
          />
        </div>
      </div>
    </section>
  );
};
