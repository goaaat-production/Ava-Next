import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page11(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
                <Header></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : embarquement de la duchesse d angouleme a pauillac'></img>
                    </section>
                </section>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Capitaine : QUOI ?! Un ruban ?! C’est tout ce qu’elle avait à nous donner ?/

                    :Capitaine : Bon, tant pis, on devrait pouvoir se débrouiller avec.../

                    :Matelot : MON CAPITAINE ! On coule à bâbord !/
                    
                    :Capitaine : Vite ! On a besoin de contrepoids ! Va voir la statue là-bas, c’est grand et lourd.
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="Cherchons Mozart"
                    liens={[
                        { href: "../chapter2/[id]", as: "../chapter2/1" },
                        ]}                      
                ></Choix>
            </section>
            
        </>
    )
}

export default Page11;