import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page3(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <img className={styles.tableau} src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Matelot : Le pont est en feu !/ 

                    :Capitaine : Jetez les canaux à l’eau ! Les femmes et les enfants d’abord !/

                    :Matelot : Capitaine, le feu se propage !/ 

                    :Capitaine : Éteignez-moi ce feu !/

                    :Capitaine : Il nous faut plus de monde pour nous aider !!!/

                    :Capitaine : Toi là bas !/

                    :Capitaine : Que est ton nom ?
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="Mettre un form ici"
                    liens={[
                        { href: "./[id]", as: "./3" },                        
                        ]}                    
                ></Choix>
            </section>
            
        </>
    )
}

export default Page3;