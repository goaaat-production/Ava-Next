import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page13(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className={styles.page}>
            <img className={styles.tableau} src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Capitaine : C'est Mozart... Il n'as tant besoin de son fauteuil/

                    :Mozart : Que voulez vous ?
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="J’ai besoin de quelque chose de lourd, je peux vous emprunter votre fauteuil ?/J’ai besoin de quelque chose de lourd et le capitaine a dit que vous étiez lourd"
                    liens="./3|./3"                  
                ></Choix>
            </section>
            
        </>
    )
}

export default Page13;