import ScheduleMeetingsScreen from '../svgs/schedule-meetings-screen.svg';
import ScheduleMeetingsIcon from '../svgs/schedule-meetings-icon.svg';
import RecordMeetingsScreen from '../svgs/record-meetings-screen.svg';
import RecordMeetingsIcon from '../svgs/record-meetings-icon.svg';
import GenerateReportScreen from '../svgs/generate-report-screen.svg';
import GenerateReportIcon from '../svgs/generate-report-icon.svg';
import ExportTasksScreen from '../svgs/export-tasks-screen.svg';
import ExportTasksIcon from '../svgs/export-tasks-icon.svg';
import AskRobotpalScreen from '../svgs/ask-robotpal-screen.svg';
import AskRobotpalIcon from '../svgs/ask-robotpal-icon.svg';

const FeatureList = [
  {
    title: 'Schedule Meetings',
    screen: ScheduleMeetingsScreen,
    icon: ScheduleMeetingsIcon,
    description: 'Schedule your meetings ahead of time and sync them with your calendar for a better experience.',
  },
  {
    title: 'Record Meetings',
    screen: RecordMeetingsScreen,
    icon: RecordMeetingsIcon,
    description: "Record every meeting even when you're in a hurry with the press of a button.",
  },
  {
    title: 'Generate Summary',
    screen: GenerateReportScreen,
    icon: GenerateReportIcon,
    description: 'After recording, you will get the transcript, the summary and task list based on the meeting.',
  },
  {
    title: 'Export Tasks',
    screen: ExportTasksScreen,
    icon: ExportTasksIcon,
    description: 'Export the desired tasks and organize them on your favorite management tool.',
  },
  {
    title: 'Ask RobotPal',
    screen: AskRobotpalScreen,
    icon: AskRobotpalIcon,
    description: 'RobotPal, your virtual assistant, will answer any question you have regarding your meetings.',
  },
];

const FeatureItem = ({ title, screen, icon, description, reverse = false }) => {
  const titleRowStyle = reverse ? ' flex-row-reverse' : '';
  const desktopStyle = reverse ? ' lg:flex-row-reverse' : ' lg:flex-row';

  return (
    <div className={'flex flex-col justify-center items-center gap-[12px] lg:gap-[150px] w-[100%]' + desktopStyle}>
      <div className='flex lg:w-[430px] items-center justify-center'>
        <img src={screen} alt='Meeting Screen' className='w-[140px] lg:w-[170px]' />
      </div>
      <div className='flex flex-col gap-[18px] lg:gap-[5px] lg:w-[430px] '>
        <div className={'flex justify-center items-center gap-[18px]' + titleRowStyle + ' lg:flex-col'}>
          <img src={icon} alt='Meeting Screen' className='w-[70px] lg:w-[102px]' />
          <h3 className='font-extraBold text-[20px] lg:text-[24px]'>{title}</h3>
        </div>
        <p className='font-regular text-center lg:text-justify text-[16px] lg:text-[18px]'>{description}</p>
      </div>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <div>
      <div className='pb-16' id='features'>
        <div className='section-header mb-[30px] mt-[30px] lg:mb-[84px] lg:mt-[80px]'>
          <h2 className='text-primary-one text-center font-bold text-[28px] lg:font-extraBold lg:text-[36px]'>
            Our Features
          </h2>
          <p className='font-regular text-[18px] mt-[18px] text-center'>How WorkPal makes your life easier</p>
        </div>
        <div className='flex flex-col section-content gap-[35px] lg:gap-[100px]'>
          {FeatureList.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              screen={feature.screen}
              icon={feature.icon}
              description={feature.description}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
        <div className='section-footer'></div>
      </div>
    </div>
  );
};
