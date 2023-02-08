import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/page1.module.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page2(){


    return(
        <>  
            <section className={styles.page}>
                <Guide contenu="Dirigez vous vers lincendie-du-steamer-austria"></Guide>

                <img className={styles.tableau} src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                
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

export default Page2;