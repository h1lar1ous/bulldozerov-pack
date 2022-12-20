import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>

        <div className={styles.content}>

            <div className={styles.left}>

                <p>Мы собрали самый свежий и удобный в использовании дизайнерский пак!</p>

                <div className={styles.buttons}>

                    <button className={styles.review}>Оставить отзыв</button>
                    <button className={styles.social}>Мы в соцсетях</button>

                </div>

            </div>

            <div className={styles.right}>

            </div>

        </div>

    </div>
  )
}

export default Hero