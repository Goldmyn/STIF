import React from 'react';
import styles, { layout } from '../style';
import Usdt from '../assets/usdt.png';
import Usdc from '../assets/usdc.png';
import { apple, google } from '../assets';




const BillingCard = () => (
  <section id="product" className={layout.sectionReverse}>
  <div className='grid  sm:w-[100%] md:w-[50%] md:h-[150px] md:mt-4  p-6 rounded-[22px]  '>
  <div className={`${styles.flexCenter} flex animate-bounce   sm:w-[100%] md:w-[50%] md:h-[150px] md:mt-4  mb-3 p-6 rounded-[22px] billing-card `}>
    <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full
        bg-dimBlue`}>
      <img 
        src={Usdt}  alt="icon" className="w-[150px] h-[150px] 
        object-contain" />
      
    </div>
    <div className={`flex-1 flex flex-col ${styles.flexCenter}`}>
      <h4 className={`font-poppins font-semibold text-white
          text-[18px] md:text-[50px] leading-[23px] mb-1 md:mb-3 `}>
        USDT
      </h4>
      <p className={`font-poppins font-normal text-dimWhite
          text-[16px] leading-[24px] mt-1 md:mt-3`}>
        Transactions
      </p>
    </div>
    <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full
        bg-dimBlue `}>
      <img 
        src={Usdt}  alt="icon" className="w-[150px] h-[150px]
        object-contain" />
    </div>
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    
  </div>

  <div className={`${styles.flexCenter} flex animate-bounce  sm:w-[100%] md:w-[50%] md:h-[150px] md:mt-4  p-6 rounded-[22px] billing-card `}>
    <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full
        bg-dimBlue`}>
      <img 
        src={Usdc}  alt="icon" className="w-[150px] h-[150px] 
        object-contain" />
      
    </div>
    <div className={`flex-1 flex flex-col ${styles.flexCenter}`}>
      <h4 className={`font-poppins font-semibold text-white
          text-[18px] md:text-[50px] leading-[23px] mb-1 md:mb-3 `}>
        USDC
      </h4>
      <p className={`font-poppins font-normal text-dimWhite
          text-[16px] leading-[24px] mt-1 md:mt-3`}>
        Transactions
      </p>
    </div>
    <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full
        bg-dimBlue `}>
      <img 
        src={Usdc}  alt="icon" className="w-[150px] h-[150px]
        object-contain" />
    </div>
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    
  </div>

  </div>
  
  
  

  <div className={`${layout.sectionInfo} ml-2 ` } >
  <h1 className="flex-1 font-poppins font-semibold ss:text-[72px]
        text-[50px] text-gold-gradient ss:leading-[100px] leading-[70px]">
        Control <br className="sm:block hidden  "/>
      <span 
          className="text-gradient">Your Finance.
      </span>
    </h1>
    <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
          Transact With USDT & USDC. You can easily invest and make profit from anywhere around the world
          without any hassle. Transactions are completed withing minutes .
    </p>
    <div className={`${styles.flexCenter} md:flex-1 `}>
      <img src={apple} className="mx-2 mb-2 align-items-end justify-end  animate-pulse" />
      <img src={google} className="mx-2 mb-2 align-items-start justify-start animate-pulse" />
    </div> 
  </div>

</section>





);


export default BillingCard