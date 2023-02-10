import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page17(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
                <Header objet1={true} objet2={true}></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../charles-quint-ramassant-le-pinceau-de-titien.png' alt='Statue : Mozart Expirant'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Titien : Je sais ! C’est pour mon spazzola que vous venez !/
                    
                    :Titien : Le pinceau que l’empereur Charles Quint lui-même a ramassé !
                "></Dialogue>
                </section>
                
                
                <Choix shown={isLastPhrase}
                    contenus="Je sais pas ce que c’est un spazzola mais... oui ?/Oui ma foi, le capitaine a besoin d’un pinceau."
                    liens={[
                        { href: "./[id]", as: "./3" },
                        { href: "./[id]", as: "./3" },
                        ]}                     
                ></Choix>
            </section>
            
        </>
    )
}

export default Page17;