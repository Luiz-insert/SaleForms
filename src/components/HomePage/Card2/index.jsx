import React from 'react'
import styles from './styles.module.css'
import { useTitulo } from '../../../hooks'

export default function Card2({ props }) {


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.groupPart1}>
                    <div className={styles.groupTitle}>
                        <p className={styles.title}>{props.title1}</p>
                        <div className={styles.imgContainer}>
                            <img src={props.image1} alt="card" className={styles.img} />
                        </div>
                    </div>
                </div>
                <div className={styles.groupPart2}>
                    <div className={styles.groupTitle}>
                        <p className={styles.title}>{props.title2}</p>
                        <div className={styles.modalGroup}>
                            <div className={styles.modal1}>
                                <p className={styles.modalText}>Abrir modal</p>
                            </div>
                            <div className={styles.modal2}>
                                <p className={styles.modalText}>Abrir modal</p>
                            </div>
                            <div className={styles.modal3}>
                                <p className={styles.modalText}>Abrir modal</p>
                            </div>
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