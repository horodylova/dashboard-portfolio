'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon } from '@progress/kendo-svg-icons';

export default function BriefSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section id="contact" className="k-bg-app-surface k-py-8">
      <div
        className="k-d-flex k-flex-col k-gap-5 k-gap-md-10 k-align-items-center k-py-8 k-py-md-16 k-px-4 k-px-md-19 k-px-lg-24 k-bg-primary k-color-white k-rounded-xl k-mx-auto k-box-sizing-border"
        style={{ maxWidth: '935px', marginTop: '0' }}  
      >
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-text-center">Let's Work Together</h2>
          <p className={`k-font-size-lg ${isMobile ? '' : 'k-text-center'} !k-m-0`}>
          To make our collaboration efficient and transparent, please fill in my short project brief (available in English and Ukrainian). This will help me quickly assess your needs and offer the best solution
          </p>
        </div>
        <div className="k-d-flex k-justify-content-center k-gap-4" style={{ maxWidth: "100%" }}>
          <Button 
            themeColor="tertiary" 
            size="large"
            onClick={() => window.open('https://forms.gle/7yJVFu8Z2DRiXb64A', '_blank')}
          >
            {isMobile ? "EN" : "Start in English"}
          </Button>
          <Button 
            themeColor="tertiary" 
            size="large"
            onClick={() => window.open('https://forms.gle/Rgn8jK63LzAy1maM7', '_blank')}
          >
            {isMobile ? "UK" : "Почати українською"}
          </Button>
        </div>
        <div className="k-d-flex k-flex-col k-flex-sm-row k-justify-content-center k-gap-4 k-gap-sm-10 k-flex-wrap">
          <div className="k-d-flex k-align-items-center k-gap-2">
            <SvgIcon icon={checkIcon} />
            <div>Clear onboarding</div>
          </div>
          <div className="k-d-flex k-align-items-center k-gap-2">
            <SvgIcon icon={checkIcon} />
            <div>Realistic timelines</div>
          </div>
          <div className="k-d-flex k-align-items-center k-gap-2">
            <SvgIcon icon={checkIcon} />
            <div>Personalised feedback</div>
          </div>
          <div className="k-d-flex k-align-items-center k-gap-2">
            <SvgIcon icon={checkIcon} />
            <div>Ongoing support</div>
          </div>
        </div>
      </div>
    </section>
  );
}