import React, { Fragment } from 'react'
import styles from './styles.module.css'
import logoBanner from '../../../assets/spa_logo_banner.png'

export default function Banner_01() {
  return (

    <Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentBackground}>
            <img src={logoBanner} alt="banner_01" className={styles.logoBanner} />
            <div className={styles.groupText}>
              <p className={styles.textBanner}>Desenvolvimento criativo para demandas exoticas...</p>
            </div>
          </div>
          <div className={styles.contentBackgroundEffect}>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
