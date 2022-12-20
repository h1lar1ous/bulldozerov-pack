import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>

        <div className={styles.content}>

            <div className={styles.buttons}>
                
                <a target='_blank' href="https://t.me/bulldozerov_studio">Помощь</a>
                <a target='_blank' href="https://vk.com/topic-196491877_47671626">Отзывы о паке</a>

            </div>

            <div className={styles.social}>

                <a target='_blank' href="https://vk.com/bulldozerov_studio"><img src="./social/vk.png" alt="" /></a>
                <a target='_blank' href="https://t.me/gefzyyy"><img src="./social/tg.png" alt="" /></a>
                <a target='_blank' href="https://www.behance.net/bulldozerov_studio"><img src="./social/beh.png" alt="" /></a>

            </div>

            <div className={styles.info}>

                <p>
                    Лучший бесплатный дизайнерский пак!<br></br>
                    Разработали для вас с любовью Bulldozerov Studio в 2022 году
                </p>

            </div>

        </div>

    </div>
  )
}

export default Footer