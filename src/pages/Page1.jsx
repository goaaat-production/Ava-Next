import { useState } from 'react';
import Dialogue from '../app/components/Dialogues'
import styles from '../app/styles/page1.module.css'
import Guide from '../app/components/Guides'
import Choix from '../app/components/Choix'



function Page1(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <img className={styles.tableau} src='./lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Matelot : Le pont est en feu !/ 

                    :Capitaine : Jetez les canaux à l’eau ! Les femmes et les enfants d’abord !/

                    :Matelot : Capitaine, le feu se propage !/ 

                    :Capitaine : Éteignez-moi ce feu !/

                    :Capitaine : Toi là, tu fais quoi ?
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="Choix numéro 1/Choix numéro 2/Choix numéro 3"                    
                ></Choix>

                <Guide contenu="Parlez au capitaine"></Guide>
            </section>
            
        </>
    )
}

export default Page1;