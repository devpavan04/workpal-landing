import LinkedIn from '../svgs/linkedin-logo.svg';
import WebLogo from '../svgs/web-logo.svg';
import GithubLogo from '../svgs/github.svg';
import Ana from '../svgs/ana.svg';
import Aoi from '../svgs/aoi.svg';
import Aurelio from '../svgs/aurelio.svg';
import Gurjot from '../svgs/gurjot.svg';
import Javier from '../svgs/javier.svg';
import Claire from '../svgs/claire.svg';
import Edward from '../svgs/edward.svg';
import Pavan from '../svgs/pavan.svg';
import Saurab from '../svgs/saurab.svg';
import Magnetix from '../svgs/magnetix-logo.svg';
import Team from '../svgs/team.svg';

const team = [
  {
    name: 'Ana Rodriguez',
    title: 'UI/UX Designer',
    image: Ana,
    linkedInLink: 'https://www.linkedin.com/in/Anarodriguezv/',
    otherLink: {
      type: 'web',
      link: '',
    },
  },
  {
    name: 'Aoi Netsu',
    title: 'UI/UX Designer',
    image: Aoi,
    linkedInLink: 'https://www.linkedin.com/in/aoinetsu/',
    otherLink: {
      type: 'web',
      link: '',
    },
  },
  {
    name: 'Aurelio Selman',
    title: 'UI/UX Designer',
    image: Aurelio,
    linkedInLink: 'https://www.linkedin.com/in/aurelioselman/',
    otherLink: {
      type: 'web',
      link: '',
    },
  },
  {
    name: 'Gurjot Singh',
    title: 'UI/UX Designer',
    image: Gurjot,
    linkedInLink: 'https://www.linkedin.com/in/gurjotsinghdev/',
    otherLink: {
      type: 'web',
      link: '',
    },
  },
  {
    name: 'Javier Ruiloba',
    title: 'UI/UX Designer',
    image: Javier,
    linkedInLink: 'https://www.linkedin.com/in/javier-p-r/',
    otherLink: {
      type: 'web',
      link: '',
    },
  },
  {
    name: 'Claire Simbulan',
    title: 'Full Stack Developer',
    image: Claire,
    linkedInLink: 'https://www.linkedin.com/in/clairesimbulan/',
    otherLink: {
      type: 'github',
      link: 'https://github.com/clairesm',
    },
  },
  {
    name: 'Edward Fernandez',
    title: 'Full Stack Developer',
    image: Edward,
    linkedInLink: 'https://www.linkedin.com/in/edwardmsf',
    otherLink: {
      type: 'github',
      link: 'https://github.com/epfrndz',
    },
  },
  {
    name: 'Pavan Soratur',
    title: 'Full Stack Developer',
    image: Pavan,
    linkedInLink: 'https://www.linkedin.com/in/pavansoratur/',
    otherLink: {
      type: 'github',
      link: 'https://github.com/devpavan04',
    },
  },
  {
    name: 'Saurab Sen',
    title: 'Full Stack Developer',
    image: Saurab,
    linkedInLink: 'https://www.linkedin.com/in/saurab-sen/',
    otherLink: {
      type: 'github',
      link: 'https://github.com/saurabsen',
    },
  },
];

export const TeamSection = () => {
  return (
    <div className='bg-neutral-1 pt-6 px-6 md:px-10 rounded-xl'>
      <h2 className='font-extraBold text-[28px] text-primary-one text-center'>Our Pals</h2>
      <div className='flex flex-wrap justify-center items-center gap-10 mt-10'>
        {team.map((member) => (
          <Profile {...member} />
        ))}
      </div>
      <div className='mt-20 flex flex-col gap-10'>
        <img src={Magnetix} alt='Magnetix' className='block mx-auto' />
        <img src={Team} alt='Team' className='w-full' />
      </div>
    </div>
  );
};

const Profile = ({ name, title, image, linkedInLink, otherLink }) => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <img src={image} alt={name} className='max-w-[130px] md:max-w-[140px]' />
      <div className='flex flex-col items-center text-center'>
        <p className='font-bold text-primary-one text-[16px]'>{name}</p>
        <p className='font-regular text-[12px]'>{title}</p>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <a href={linkedInLink}>
          <img src={LinkedIn} alt='' />
        </a>
        {otherLink.type === 'web' ? (
          <a href={otherLink.link}>
            <img src={WebLogo} alt='Social Logo' />
          </a>
        ) : (
          <a href={otherLink.link}>
            <img src={GithubLogo} alt='Social Logo' />
          </a>
        )}
      </div>
    </div>
  );
};
