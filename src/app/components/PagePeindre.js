import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from './sketch'
import styles from '../styles/components/PagePeindre.module.css'

function PagePeindre() {
    return (
        <>
            <div className={styles.content} >
                <div className={styles.drawboard } id='test'>
                     <ReactP5Wrapper sketch={sketch} /> 
                </div>
                <button className={styles.buttonValider}>
                    Valider
                </button>

            </div>


        </>
    )
}

export default PagePeindre