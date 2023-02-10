import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page15(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
                <Header></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Mozart : Très bien, très bien, j'arrête.../

                    :Mozart : Prenez mon fauteuil et partez ! Bon vent !/

                    :Capitaine : Tu as le fauteuil ? C'est parfait !/

                    :Capitaine : ça fera un très bon contrepoids/

                    :Matelot : CAPITAINE !!! La passerelle est en feu !/

                    :Capitaine : J’arrive ! Je sais comment faire mais j’ai besoin d’un pinceau ! Titien en a un ! Va le chercher !
                "></Dialogue>
                </section>
                
                
                <Choix shown={isLastPhrase}
                    contenus="J'y vais"
                    liens={[
                        { href: "../chapter3/[id]", as: "../chapter3/1" },
                        ]}                   
                ></Choix>
            </section>
            
        </>
    )
}

export default Page15;