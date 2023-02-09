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
                    :Mozart : 10... si seulement.../

                    :Mozart : Mais, puisque vous êtes là, vous pouvez écrire ma symphonie, ça commence comme ça...
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="Stop Mozart, qu’est-ce que vous faites ?/Je suis désolé mais il va me falloir ce fauteuil."
                    liens={[
                        { href: "./[id]", as: "./5" },
                        { href: "./[id]", as: "./5" },
                        ]}                   
                ></Choix>
            </section>
            
        </>
    )
}

export default Page14;