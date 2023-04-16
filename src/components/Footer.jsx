import WorkPalLogo from '../svgs/workpal-logo.svg';
import PlayStoreButton from '../svgs/playstore.svg';
import AppStoreButton from '../svgs/appstore.svg';
import InstagramLogo from '../svgs/instagram-logo.svg';

export const Footer = () => {
  return (
    <div>
      <img src={WorkPalLogo} alt='Workpal Logo' className='block md:mx-auto' />
      <div className='mt-[44px] mb-[38px] flex flex-col gap-6 md:flex-row md:justify-between md:px-1 lg:px-2'>
        <div className='md:flex md:flex-col md:items-center gap-6'>
          <h3 className='uppercase text-primary-one font-bold text-[16px]'>DOWNLOAD THE APP</h3>
          <div className='md:flex md:items-center justify-center'>
            <img src={PlayStoreButton} alt='Playstore Download' className='cursor-pointer' />
            <img src={AppStoreButton} alt='Appstore Download' className='cursor-pointer' />
          </div>
        </div>
        <div className='md:flex md:flex-col md:items-center gap-6'>
          <h3 className='uppercase text-primary-one font-bold text-[16px] md:self-start md:ml-20'>CONNECT WITH US</h3>
          <form className='flex flex-col gap-3 mt-3 md:items-center md:flex-row justify-center'>
            <input
              type='text'
              className='border border-primary-one px-[16px] py-[10px] rounded-lg md:w-[160px] lg:w-[340px]'
              placeholder='Email Address'
            />
            <button type='submit' className='px-[12px] py-[10px] w-[120px] bg-secondary text-white-0 rounded-lg'>
              Subscribe
            </button>
          </form>
        </div>
        <div className='md:flex md:flex-col md:items-center gap-6'>
          <h3 className='uppercase text-primary-one font-bold text-[16px]'>FOLLOW US</h3>
          <img src={InstagramLogo} alt='Instagram Logo' className='mt-3' />
        </div>
      </div>
      <p className='block text-primary-one mb-3 md:text-center'>&copy; 2023 Magnetix. All Rights Reserved.</p>
      <div className='mb-4 flex flex-col gap-2 md:flex md:flex-col md:items-center'>
        <p className='block text-primary-one'>Privacy Policy</p>
        <p className='block text-primary-one'>Terms of Use</p>
      </div>
    </div>
  );
};
