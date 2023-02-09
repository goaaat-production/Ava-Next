import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page12(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
                <Guide contenu="Diriges toi vers la statue “Mozart Expirant”, elle pourra t’aider."></Guide>

                <img className={styles.tableau} src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                
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

export default Page12;