import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import PagePeinture from '../../../../src/app/components/PagePeindre'

function Page19(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
            <section className='texture'></section>

                <PagePeinture/>
                

                {/* <img className="tableau" src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                <Guide contenu="ici ça peint"></Guide>

                
                <Choix shown={true}
                    contenus="Jeu peinture"
                    liens={[
                        { href: "./[id]", as: "./5" },
                        ]}                     
                ></Choix> */}
            </section>
            
        </>
    )
}

export default Page19;