import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page10(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
                <img className="tableau" src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : embarquement de la duchesse d angouleme a pauillac'></img>
                <h1>LE JEU</h1>
                
                <Choix shown={true}
                    contenus="Fin du jeu"
                    liens={[
                        { href: "./[id]", as: "./5" },
                        ]}                      
                ></Choix>
            </section>
            
        </>
    )
}

export default Page10;