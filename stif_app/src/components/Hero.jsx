import React from 'react';
import styles from '../style';
import { discount} from '../assets';
import GetStarted from './GetStarted';
import robotss from '../assets/robotss.png'

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col
      ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col
          xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[6px] 
              px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount"
                      className='w-[32px] h-[32px]' />
                  <p className={`${styles.paragraph} ml-2`}>
                    Make <span className='text-gold-gradient'>10%</span> Profit In {" "}
                    <span className='text-gold-gradient'>7</span> Days With <span className="text-gold-gradient">STIF</span>
                  </p>
            </div>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px]
                          text-[50px] text-gold-gradient ss:leading-[100px] leading-[70px]">
              The Next <br className="sm:block hidden  "/> {" "}
              <span 
              className="text-gradient">Generation
              </span> {" "} 
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="w-full font-poppins font-semibold ss:text-[67px]
                          text-[52px] text-gold-gradient ss:leading-[100px] leading-[70px]">
            Trading System.
          </h1>
          <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
           In a world filled with endless opportunities, a team of experts
           took it upon themselves to create the next generation wealth generator.
           The result was named <span className="text-gold-gradient">STIF</span>. 
          </p>
        </div>

        <div className={`${styles.flexCenter} flex-1 flex ml-5 mr-5  md:my-2 my-10  relative`}>
          <img src={robotss} alt="robot"
               className="w-[100%] h-[100%] object-contain  md:rounded-lg relative z-[3]
               rounded-full animate-pulse-[10s] bg-gold-gradient p-[2px] cursor-pointer
               " />
         
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
        <div className={`ss:hidden ${styles.flexCenter} `}>
          <GetStarted />
        </div>
    </section>

  );


export default Hero