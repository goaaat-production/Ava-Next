import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page7(){

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
                    :Capitaine : Des gens sont tombés à l'eau... Il faut récuperer de quoi les secourir./

                    :Capitaine : Demande à la duchesse si elle a de quoi nous aider./ 

                    :Duchesse : Plait-il ?
                "></Dialogue>
            </section>
                
                <Choix shown={isLastPhrase}
                    contenus="Hey, un bateau coule en face ! Aidez-moi !!/Bonjour, le bateau du capitaine prend feu. J’ai besoin de votre aide."
                    liens={[
                        { href: "./3-1", as: "./3-1" },
                        { href: "./3-2", as: "./3-2" },                        
                        ]}                      
                ></Choix>
            </section>
            
        </>
    )
}

export default Page7;