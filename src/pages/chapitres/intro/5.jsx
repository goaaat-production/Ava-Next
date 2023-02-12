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
            <section className='texture'></section>


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
                    contenus="Soit, allons-y !/D’accord, pas besoin de hausser le ton non plus..."
                    liens={[
                        { href: "../chapter1/1", as: "../chapter1/1" },
                        { href: "../chapter1/1", as: "../chapter1/1" },                        
                        ]}                                
                ></Choix>
            </section>
            
        </>
    )
}

export default Page5;