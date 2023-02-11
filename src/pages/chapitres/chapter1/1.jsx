import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/directionPage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'



function Page1(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
            <section className='texture'></section>

                <Guide contenu="Diriges toi vers le tableau “EMBARQUEMENT DE LA DUCHESSE D’ANGOULÊME À PAUILLAC”"></Guide>

                <section className='cadre'>
                    <img className="tableau" src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : incendie-du-steamer-austria'></img>
                </section>
                
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

export default Page1;