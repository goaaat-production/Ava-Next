import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page8(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <img className={styles.tableau} src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : embarquement de la duchesse d angouleme a pauillac'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Duchesse : C’est à moi que vous parlez de la sorte ? Savez vous qui je suis ?/
                    
                    :Capitaine : Je vous pris de l’excuser madame ! PRENOM ne connait pas votre stature.../
                    
                    :Capitaine : PRENOM, vas-y avec des pincettes, c’est la fille de Louis XVI.../

                    :Duchesse : Je vous excuses pour cette fois... Comment puis-je vous aider ?/

                    :Capitaine : Il nous faut un objet qui pourrait secourir mes hommes...

                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="Cherchons le"
                    liens="./4"              
                ></Choix>
            </section>
            
        </>
    )
}

export default Page8;