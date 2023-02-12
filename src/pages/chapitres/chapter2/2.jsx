import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page13(){

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
                    :Capitaine : C'est Mozart... On a besoin de son fauteuil.../

                    :Mozart : Que voulez vous ?
                "></Dialogue>
                </section>
                
                
                <Choix shown={isLastPhrase}
                    contenus="Je peux vous emprunter votre fauteuil ?/Le capitaine a dit que vous étiez lourd"
                    liens={[
                        { href: "./3", as: "./3" },
                        { href: "./3", as: "./3" },
                        ]}                     
                ></Choix>
            </section>
            
        </>
    )
}

export default Page13;