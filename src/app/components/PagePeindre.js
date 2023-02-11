import React from 'react'
import dynamic from 'next/dynamic'
import sketch from './sketch'
import Choix from './Choix'
import styles from '../styles/components/PagePeindre.module.css'

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper')
    .then(mod => mod.ReactP5Wrapper), {
        ssr: false
    })

function PagePeindre() {
    return (
        <>
            <div className={styles.content} >
                <div className={styles.drawboard } id='test'>
                    <ReactP5Wrapper sketch={sketch} /> 
                </div>

                <h2 className={styles.consigne}>Dessinez le portrait de Titien. Aidez vous du tableau</h2>

                <div className={styles.bouton}>
                    <Choix shown={true}
                        contenus="Valider"
                        liens={[
                            { href: "./[id]", as: "./5" },
                        ]}
                    ></Choix>
                </div>
                

            </div>
        </>
    )
}

export default PagePeindre