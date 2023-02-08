import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page5(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <img className={styles.tableau} src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Capitaine : Tant pis ! On a besoin de toi ICI !/

                    :Capitaine : Va chercher dans les autres tableaux, VITE !
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="C'est d'accord/..."
                    liens="../chapter1/1|../chapter1/1"                  
                ></Choix>

                <Guide contenu="Parlez au capitaine"></Guide>
            </section>
            
        </>
    )
}

export default Page5;