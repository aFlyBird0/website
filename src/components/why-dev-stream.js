import clsx from 'clsx';
import React from 'react';

import Ripple from '@site/static/img/ripple-mark.svg';

const reasons = [
  'Too much effort integrating and maintaining every piece of DevOps?',
  'Difficult (if not impossible) to track who changed what config?',
  'Too much hassle to replace one of your DevOps tools?',
  'Small team, a lot of tools, and way too few DevOps engineers to fully realize your pipelines?',
];

export const WhyDevStream = () => {
  return (
    <section
      className="bg-primary-100 relative overflow-clip flex flex-col flex-nowrap items-center justify-start
    py-6
    "
    >
      <h3 className="z-10 text-heading2 font-semibold text-neutral-600">
        Why DevStream
      </h3>
      <MsgBox className="mx-4 self-stretch z-10 flex flex-col flex-nowrap gap-3">
        {reasons.map((reason) => (
          <Reason key={reason}>{reason}</Reason>
        ))}
      </MsgBox>
      <span className="text-heading2 text-primary font-semibold mt-[10px] z-10">
        Worry no more.
      </span>
      <span className="text-heading4 text-neutral-600 font-semibold mt-1 z-10">
        DevStream will get you covered.
      </span>
      <Ripple
        className="absolute opacity-50 z-0
       right-[-80px] top-[-50px] w-[200px]"
      />
      <Ripple
        className="absolute opacity-50 z-0 rotate-90
       left-[-70px] bottom-[-80px] w-[200px]"
      />
    </section>
  );
};

const MsgBox = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        'bg-white max-w-full rounded-[20px] px-3 py-4 relative mb-3',
        'drop-shadow-xl shadow-lg shadow-primary-light/10'
      )}
    >
      {children}
      <svg
        className="w-4 h-3 -bottom-3 left-1/2 absolute -translate-x-2 translate-y-[-1px]"
        viewBox="0 0 25 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.5 16.4757L24.5 0.475708H0.5L12.5 16.4757Z" fill="white" />
      </svg>
    </div>
  );
};

const Reason = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        'text-neutral-400 text-label14 flex flex-row flex-nowrap justify-start items-center'
      )}
    >
      <span className="rounded-full h-[6px] w-[6px] bg-primary block shrink-0 mr-3"></span>
      {children}
    </div>
  );
};
