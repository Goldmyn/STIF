import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () =>  (
    
    <div className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full `}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter}
          sm:min-w-[192px] min-w-[20px] `}>
           
          </div>
        ))}
      </div>
    </div>
  )


export default Clients