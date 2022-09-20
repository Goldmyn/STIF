import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
    
  <section className={`${styles.flexCenter} 
          ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row
          flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10 ">
        <img 
            src={logo}
            alt="stif-logo"
            className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make trading the financial markets
          easy, reliable and secure.
        </p>
      </div>

      
    </div>

    <div className="w-full flex justify-between
      items-center md:flex-row flex-col pt-6 border-t-[1px]
      border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-[18px]
                      leading-[27px] text-white"
      >
        2022 STIF. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer
              ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
          />
        ))}

      </div>
    </div>
  </section>
  )


export default Footer