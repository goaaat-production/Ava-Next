import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page1(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <Guide contenu="Diriges toi vers le tableau “EMBARQUEMENT DE LA DUCHESSE D’ANGOULÊME À PAUILLAC”, elle pourra t’aider."></Guide>

                <img className={styles.tableau} src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : incendie-du-steamer-austria'></img>
                
                <Choix shown={true}
                    contenus="J'y suis"
                    liens="./2"                  
                ></Choix>

            </section>
            
        </>
    )
}

export default Page1;