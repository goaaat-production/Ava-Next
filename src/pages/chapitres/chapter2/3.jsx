import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page14(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
            <img className={styles.tableau} src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Mozart : Mon fauteuil ? Ne voyez-vous donc pas que je suis en train d’écrire ma dernière symphonie ?/

                    :Mozart : Enfin, de toute façon, regardez mes doigts, je ne la finirai pas, il ne m’en reste plus que 1, 2, 3…
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="10 comme tout le monde !?/Oooh il en manque 2, vous en avez plus que 8..."
                    liens="./4-1|./4-2"                  
                ></Choix>
            </section>
            
        </>
    )
}

export default Page14;