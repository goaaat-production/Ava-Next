import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page18(){

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
                    :Titien : Mon pinceau se mérite !/
                    
                    :Titien : Je n’accepterai de le céder qu’à celui qui réalisera le plus beau tableau de moi.
                "></Dialogue>
                
                </section>

                
                <Choix shown={isLastPhrase}
                    contenus="Commencer à peindre"
                    liens={[
                        { href: "./[id]", as: "./4" },
                        ]}                     
                ></Choix>
            </section>
            
        </>
    )
}

export default Page18;