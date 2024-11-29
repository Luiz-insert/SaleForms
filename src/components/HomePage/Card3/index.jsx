import React from 'react'
import styles from './styles.module.css'
import { useTitulo } from '../../../hooks'

export default function Card3({ props }) {


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.groupPart1}>
                    <div className={styles.groupTitle}>
                        <p className={styles.title}>{props.title1}</p>
                        <div className={styles.domainContainer}>
                            <img src={props.image1} alt="card" className={styles.img1} />
                            <p className={styles.label}>{props.title2}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.groupPart2}>
                    <div className={styles.groupLabelContainer}>
                        <div className={styles.groupLabel}>
                            <p className={styles.title}>{props.label1}</p><img src={props.image2} alt="card" className={styles.img2} />
                        </div>
                        <div className={styles.groupLabel}>
                            <p className={styles.title}>{props.label2}</p><img src={props.image2} alt="card" className={styles.img2} />
                        </div>
                        <div className={styles.groupLabel}>
                            <p className={styles.title}>{props.label3}</p><img src={props.image2} alt="card" className={styles.img2} />
                        </div>
                        <div className={styles.groupLabel}>
                            <p className={styles.title}>{props.label4}</p><img src={props.image2} alt="card" className={styles.img2} />
                        </div>
                    </div>
                </div>

                <div className={styles.waterMark}>
                    <p className={styles.waterMarkText1}>SPA Lab</p> <div className={styles.waterMarkLine}></div> <p className={styles.waterMarkText2}>Coddara</p>
                </div>
            </div>
        </div>
    )
}