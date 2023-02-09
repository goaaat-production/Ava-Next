import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page17(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
            <img className="tableau" src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Titien : Je sais ! C’est pour mon spazzola que vous venez !/
                    
                    :Titien : Le pinceau que l’empereur Charles Quint lui-même a ramassé !
                "></Dialogue>
                
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