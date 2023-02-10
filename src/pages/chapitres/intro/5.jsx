import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page5(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">

                <Header></Header>


                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                    </section>

                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Capitaine : J’en ai rien à faire !/

                    :Capitaine : dirige toi vers les tableaux ! VITE !
                    "></Dialogue>
                </section>

                
                
                <Choix shown={isLastPhrase}
                    contenus="C'est d'accord/Si vous y tenez"
                    liens={[
                        { href: "../chapter1/[id]", as: "../chapter1/1" },
                        { href: "../chapter1/[id]", as: "../chapter1/1" },                        
                        ]}                                
                ></Choix>
            </section>
            
        </>
    )
}

export default Page5;