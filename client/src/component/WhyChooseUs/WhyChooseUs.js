import React from 'react';

const sharedClasses = {
  flexCenter: 'flex justify-center items-center',
  roundedFull: 'rounded-full',
  mxAuto: 'mx-auto',
  mb4: 'mb-4',
  textCenter: 'text-center',
  textLg: 'text-lg',
  fontSemibold: 'font-semibold',
  mt2: 'mt-2',
  bgAccent: 'bg-green-500', // Updated color to green
  textForeground: 'text-gray-800 text-xl',
  textMutedForeground: 'text-gray-500',
};

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-24"> {/* Increased padding on the y-axis */}
      <div className="max-w-7xl mx-auto text-center">
        <p className={`${sharedClasses.textLg} font-extrabold text-[30px] pb-3 ${sharedClasses.textForeground}`}>
          Why Choose Us
        </p>
        <p className={`${sharedClasses.mt2} ${sharedClasses.textMutedForeground}`}>
          Imperdiet aliquet est vel nulla turpis<br/> eu consequat ullamcorper a egestas suspendisse<br/> faucibus eu velit, phasellus pulvinar lorem et libero et tortor, sapien nulla.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <WhyChooseUsItem
          iconUrl="https://openui.fly.dev/openui/48x48.svg?text=🔬" // Updated size to 48x48
          title="High Quality Lab"
          description="In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin tincidunt"
        />
        <WhyChooseUsItem
          iconUrl="https://openui.fly.dev/openui/48x48.svg?text=👥" // Updated size to 48x48
          title="Unmatched Expertise"
          description="In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin tincidunt"
        />
        <WhyChooseUsItem
          iconUrl="https://openui.fly.dev/openui/48x48.svg?text=📄" // Updated size to 48x48
          title="Precise Result"
          description="In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin tincidunt"
        />
        <WhyChooseUsItem
          iconUrl="https://openui.fly.dev/openui/48x48.svg?text=👨‍⚕️" // Updated size to 48x48
          title="Qualified Staff"
          description="In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin tincidunt"
        />
      </div>
    </div>
  );
};

const WhyChooseUsItem = ({ iconUrl, title, description }) => {
  return (
    <div className={sharedClasses.textCenter}>
      <div className={`${sharedClasses.flexCenter} w-20 h-20 ${sharedClasses.bgAccent} ${sharedClasses.roundedFull} ${sharedClasses.mxAuto} ${sharedClasses.mb4} py-6`}> {/* Increased padding inside the icon container */}
        <img aria-hidden="true" alt={title} src={iconUrl} className="w-12 h-12" /> {/* Increased icon size */}
      </div>
      <h3 className={`${sharedClasses.textLg} ${sharedClasses.fontSemibold} ${sharedClasses.textForeground}`}>{title}</h3>
      <p className={`${sharedClasses.mt2} ${sharedClasses.textMutedForeground}`}>{description}</p>
    </div>
  );
};

export default WhyChooseUs;
