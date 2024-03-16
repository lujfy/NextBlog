import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lujfy - TruongLe</div>
      <div className={styles.text}>
        Project made on 12/3/2024 - availabe on github
      </div>
    </div>
  )
}

export default Footer