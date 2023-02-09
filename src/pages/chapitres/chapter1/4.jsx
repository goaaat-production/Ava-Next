import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/game1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page10(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

function clickOnBoat(){
console.log('Ok')
}

function clickOnMen(){
    console.log('Mashallah')
}

function clickOnRibbon(){
    console.log('Moui')
    }

    return(
        <>  
            <section className={styles.page} >
                <div className={styles.container}>
                    <img src='/embarquement-de-la-duchesse-dangouleme-a-pauillac.png' className={styles.tableau}/>
                        <div className={styles.boat} onClick={clickOnBoat}></div>
                        <div className={styles.men} onClick={clickOnMen}></div>
                        <div className={styles.ribbon} onClick={clickOnRibbon}></div>
                </div>
                
                <Choix shown={true}
                    contenus="Fin du jeu"
                    liens={[
                        { href: "./[id]", as: "./5" },
                        ]}                      
                ></Choix>
            </section>
            
        </>
    )
}

export default Page10;