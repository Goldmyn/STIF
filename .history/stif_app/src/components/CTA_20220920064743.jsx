import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () =>  (
    
    <section className={`${styles.flexCenter} ${styles.marginY}
    ${styles.padding} sm:flex-row flex-col
    bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex flex-1 flex-col">
      <h2 className={`${styles.heading2} text-gold-gradient`}>
        Try our services Now!
      </h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-3`}>
        Get access to Everything you need to 
        make profits trading the financial markets 
        from anywhere around the world.
      </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-5`}>
        <Button />
      </div>
    </section>
  )


export default CTA