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
            <section className='texture'></section>

                <Header objet1={true}></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Mozart : Très bien, très bien, j'arrête.../

                    :Mozart : Allez, prenez mon fauteuil, mais je reste dessus, vous avez gagné le gros lot !
                "></Dialogue>
                </section>
                
                
                <Choix shown={isLastPhrase}
                    contenus="Merci Mozart"
                    liens={[
                        { href: "./6", as: "./6" },
                        ]}                   
                ></Choix>
            </section>
            
        </>
    )
}

export default Page15;