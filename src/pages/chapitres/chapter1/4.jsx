import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page10(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <img className={styles.tableau} src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : embarquement de la duchesse d angouleme a pauillac'></img>
                <h1>LE JEU</h1>
                
                <Choix shown={true}
                    contenus="Fin du jeu"
                    liens="./5"              
                ></Choix>
            </section>
            
        </>
    )
}

export default Page10;