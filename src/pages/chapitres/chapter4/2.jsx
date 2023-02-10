import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page22(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
                <Guide contenu="Jeu DragAndDrop"></Guide>
                
                <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : l incendie du steamer austria'></img>
                
                <Choix shown={true}
                    contenus="DRAG AND DROP GAGNÉ"
                    liens={[
                        { href: "./[id]", as: "./3" },
                        ]}   
                ></Choix>

            </section>
            
        </>
    )
}

export default Page22;