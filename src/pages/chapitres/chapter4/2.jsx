import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page22(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <Guide contenu="Jeu DragAndDrop"></Guide>

                <img className={styles.tableau} src='../../lincendie-du-steamer-austria.png' alt='Tableau : l incendie du steamer austria'></img>
                
                <Choix shown={true}
                    contenus="DRAG AND DROP GAGNÉ"
                    liens={[
                        { href: "./[id]", as: "./3" },
                        ]}   
                ></Choix>

            </section>
            
        </>
    )
}

export default Page22;