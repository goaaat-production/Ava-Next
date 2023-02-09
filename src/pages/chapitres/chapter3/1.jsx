import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page16(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
                <Guide contenu="Dirigez-vous vers “CHARLES QUINT RAMASSANT LE PINCEAU DE TITIEN”, le capitaine en a besoin.."></Guide>

                <img className="tableau" src='../../charles-quint-ramassant-le-pinceau-de-titien.png' alt='Tableau : charles-quint-ramassant-le-pinceau-de-titien'></img>
                
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

export default Page16;