import React, { Fragment } from 'react'
import styles from './styles.module.css'
import logo from '../../../assets/coddara_logo.svg'

export default function Header() {
 

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.groupLogo}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.groupTitle}>
            <p className={styles.title}>Single Page Application</p>
          </div>
        </div>
        <div className={styles.groupBtns}>
            <button className={styles.btn1}>Products</button>
            <button className={styles.btn2}>Solutions</button>
            <button className={styles.btn3}>Pricing</button>
            <button className={styles.btn4}>Contact</button>
        </div>
        <div className={styles.backgroundFade}></div>
      </header>
    </Fragment>
  )
}



