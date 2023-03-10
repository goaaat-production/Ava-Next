import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page9(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
            <section className='texture'></section>

                <Header></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : embarquement de la duchesse d angouleme a pauillac'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Duchesse : Oh non, vous coulez ? Mais quelle tragédie !/
                    
                    :Duchesse : Je ne comprends pas, la mer jusqu’aux Amériques est pourtant si paisible !/
                    
                    :Duchesse : Comment puis-je vous aider ?/

                    :Capitaine : Il nous faut un objet qui pourrait secourir mes hommes...
                "></Dialogue>
                </section>
                
                
                <Choix shown={isLastPhrase}
                    contenus="Cherchons-le"
                    liens={[
                        { href: "./4", as: "./4" },
                        ]}                      
                ></Choix>
            </section>
            
        </>
    )
}

export default Page9;