import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page4(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
                <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Capitaine : Alors aide nous plûtot !/ 

                    :Capitaine : Va chercher de quoi nous secourir chez les autres tableaux.
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="C'est d'accord/J'ai la flemme un peu..."
                    liens={[
                        { href: "../chapter1/[id]", as: "../chapter1/1" },
                        { href: "./[id]", as: "./5" },                        
                        ]}                  
                ></Choix>

                <Guide contenu="Parlez au capitaine"></Guide>
            </section>
            
        </>
    )
}

export default Page4;