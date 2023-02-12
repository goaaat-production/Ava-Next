import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/directionPage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page12(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
            <section className='texture'></section>

                <Guide contenu="Dirigez-vous vers la statue “Mozart Expirant”, elle pourra vous aider."></Guide>

                <section className='cadre'>
                    <img className="tableau" src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
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

export default Page12;