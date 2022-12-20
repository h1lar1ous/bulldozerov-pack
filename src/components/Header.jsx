import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
    const [active, setActive] = useState(0);
    const buttons = [
        {
            name: 'HOME'
        },
        {
            name: 'OUR WEBSITE'
        },
        {
            name: 'CONTACTS'
        }
    ]

  return (
    <div className={styles.container}>

        <div className={styles.content}>

            <p className={styles.logo}>DESIGN. PACK</p>

            <div className={styles.buttons}>

                {buttons.map((button, idx) => (
                    <p 
                    key={idx} 
                    onClick={() => setActive(idx)}
                    className={ active === idx ? styles.active : styles.button }
                    >
                    {button.name}
                    </p>
                ))}

            </div>

        </div>    

    </div>
  )
}

export default Header