import { useState } from 'react';

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className='flex justify-between items-center py-6'>
      <div className='flex items-center'>
        {/* Logo */}
        <img src='/static/svgs/workpal-logo.svg' alt='Workpal Logo' className='w-32' />
      </div>
      <div className='hidden lg:flex items-center uppercase text-neutral-0 font-regular text-[14px] gap-10'>
        <a href='#about'>About</a>
        <a href='#features'>Features</a>
        <a href='#team'>Team</a>
        <button className='font-semiBold py-2 px-4 rounded-lg bg-secondary text-white-0'>Download Proposal</button>
      </div>
      <div className='lg:hidden'>
        <button onClick={toggleMobileMenu} className='focus:outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {isMobile ? <path d='M6 18L18 6M6 6l12 12' /> : <path d='M4 6h16M4 12h16M4 18h16' />}
          </svg>
        </button>
        {isMobile && (
          <div className='absolute inset-x-0 top-0 p-2 transition transform origin-top-right mt-16 bg-white-0'>
            <div className='bg-white rounded-lg shadow-xl border border-primary-one ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-4 py-4 flex flex-col gap-4 text-center font-regular'>
                <a href='#about' className='block'>
                  About
                </a>
                <a href='#features' className='block'>
                  Features
                </a>
                <a href='#team' className='block'>
                  Team
                </a>
                <button className='block text-center w-full font-semibold py-2 px-4 rounded-lg bg-secondary text-white-0'>
                  Download Proposal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
