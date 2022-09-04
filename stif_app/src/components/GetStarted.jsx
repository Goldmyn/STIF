import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () =>  (

    <div className={`${styles.flexCenter} w-[140px] 
          h-[140px] rounded-full animate-pulse animate-bounce bg-gold-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%]
            h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gold-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrowuplogo"
                  className="w-[23px] h-[23px] object-contain"
            />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gold-gradient">Started</span>
          </p>
      </div>
    </div>
  )


export default GetStarted