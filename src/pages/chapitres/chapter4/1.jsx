import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page21(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <Guide contenu="Dirigez-vous vers le tableau “L’INCENDIE DU STEAMER AUSTRIA”"></Guide>

                <img className={styles.tableau} src='../../lincendie-du-steamer-austria.png' alt='Tableau : l incendie du steamer austria'></img>
                
                <Choix shown={true}
                    contenus="J'y suis"
                    liens={[
                        { href: "./[id]", as: "./2" },
                        ]}   
                ></Choix>

            </section>
            
        </>
    )
}

export default Page21;