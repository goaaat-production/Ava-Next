import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page19(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <img className={styles.tableau} src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                <Guide contenu="ici ça peint"></Guide>

                
                <Choix shown={true}
                    contenus="Jeu peinture"
                    liens={[
                        { href: "./[id]", as: "./5" },
                        ]}                     
                ></Choix>
            </section>
            
        </>
    )
}

export default Page19;