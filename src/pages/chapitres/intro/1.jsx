import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import  '../../../app/styles/directionPage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page2(){


    return(
        <>  
            <section className="page">
            <section className='texture'></section>

                <Guide contenu="Dirigez-vous vers le tableau “L’INCENDIE DU STEAMER AUSTRIA”"></Guide>

                <section className='cadre'>
                    <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>

                </section>

                
                
                <Choix shown={true}
                    contenus="J'y suis"
                    liens={[
                        { href: "./2", as: "./2" },                        
                        ]}                  
                ></Choix>

            </section>
        </>
    )
}

export default Page2;