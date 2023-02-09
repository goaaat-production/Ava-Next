import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page18(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
            <img className={styles.tableau} src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Titien : Mon pinceau se mérite !/
                    
                    :Titien : Je n’accepterai de le céder qu’à celui qui réalisera le plus beau tableau de moi.
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="Commencer à peindre"
                    liens={[
                        { href: "./[id]", as: "./4" },
                        ]}                     
                ></Choix>
            </section>
            
        </>
    )
}

export default Page18;