import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page7(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <img className={styles.tableau} src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : embarquement de la duchesse d angouleme a pauillac'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Capitaine : Des gens sont tombés à l'eau... Il faut récuperer de quoi les secourir./

                    :Capitaine : Demande à la duchesse si elle a de quoi nous aider/ 

                    :Duchesse : Plait-il ?
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="Hey, un bateau coule en face ! Aidez-moi !!/Bonjour, le bateau du capitaine prend feu. J’ai besoin de votre aide."
                    liens="./3-1|./3-2"              
                ></Choix>
            </section>
            
        </>
    )
}

export default Page7;