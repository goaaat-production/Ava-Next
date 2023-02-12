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
            <section className='texture'></section>


                <Header></Header>
                
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                        :Capitaine : Alors aide nous plutôt !/ 

                        :Capitaine : Va chercher de quoi nous secourir chez les autres tableaux.
                    "></Dialogue>
                </section>
                
                <Choix shown={isLastPhrase}
                    contenus="J’accepte !/J'ai un peu la flemme..."
                    liens={[
                        { href: "../chapter1/1", as: "../chapter1/1" },
                        { href: "./5", as: "./5" },                        
                        ]}                  
                ></Choix>

            </section>
            
        </>
    )
}

export default Page4;