import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <h2 className={styles.subtitle}>About Corporation</h2>
        <h1 className={styles.title}>We create digital idea that are bigger, better, bolder, braver.</h1>
        <p className={styles.desc} >We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>

          <div className={styles.box}>
            <h1>5,000</h1>
            <p>Five star review</p>
          </div>

          <div className={styles.box}>
            <h1>4+</h1>
            <p>Awards</p>
          </div>
        </div>

      </div>

      <div className={styles.imgContainer}>
        <Image 
          src={'/about.png'}
          alt='about Images'
          fill

        />
      </div>
    </div>
  )
}

export default AboutPage
