import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`${index !== features.length -1 ? "mb-6"
       : "mb-0" } flex flex-row p-6 rounded-[22px] feature-card `}>
    <div className={`w-[64px] h-[64px] rounded-full
        bg-dimBlue ${styles.flexCenter}`}>
      <img 
        src={icon}  alt="icon" className="w-[50%] h-[50%]
        object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className={`font-poppins font-semibold text-white
          text-[18px] leading-[23px] mb-1`}>
        {title}
      </h4>
      <p className={`font-poppins font-normal text-dimWhite
          text-[16px] leading-[24px] mb-1`}>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => (


    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
         You make profits and 
          <br className="sm:block hidden" />  <span className="text-gold-gradient">STIF</span> handles the trades. 
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          With <span className="text-gold-gradient">STIF</span>, you can easily improve your financial life by
          making passive income, <span className="text-gold-gradient">STIF</span> scans through all trading pairs to find the perfect 
            trading opportunity daily.
        </p>
        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} 
          {...feature} index={index}/>
        ))}
      </div>
    </section>
  )


export default Business