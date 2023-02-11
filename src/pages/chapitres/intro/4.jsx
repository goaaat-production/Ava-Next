import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page4(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">

                <Header></Header>
                
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                        :Capitaine : Alors aide nous plûtot !/ 

                        :Capitaine : Va chercher de quoi nous secourir chez les autres tableaux.
                    "></Dialogue>
                </section>
                
                <Choix shown={isLastPhrase}
                    contenus="J’accepte !/J'ai la flemme un peu..."
                    liens={[
                        { href: "../chapter1/[id]", as: "../chapter1/1" },
                        { href: "./[id]", as: "./5" },                        
                        ]}                  
                ></Choix>

            </section>
            
        </>
    )
}

export default Page4;