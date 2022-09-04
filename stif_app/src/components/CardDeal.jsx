import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';






const CardDeal = () => (

    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-gradient`}> 
          Trade profitably <br className="sm:block
            hidden" /> with a few steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          STIF provides all it's users with profitable trades
          daily, all you have to do is approve your trades and 
          make profits.
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img 
        src={card}
          className="w-[100%] h-[100%] animate-bounce"
        />
      </div>
    </section>
  )


export default CardDeal
