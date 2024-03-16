import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <h1 className={styles.title}>Creative Words Corpo.</h1>

        <p className={styles.desc}>
          Share your thought , express your feeling , write your story
          , with just 1 click away by our service creation
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image src={'/brands.png'} alt='' fill className={styles.brandImg}/>
        </div>

      </div>
      <div className={styles.imageContainer}>
          <Image src={'/hero.gif'} alt='' fill className={styles.heroImg}/>
      </div>
    </div>
  )
}

export default Home

