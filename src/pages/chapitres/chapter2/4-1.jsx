import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page14(){

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
                    :Mozart : 10... si seulement.../

                    :Mozart : Mais, puisque vous êtes là, vous pouvez écrire ma symphonie, ça commence comme ça 
                    🎵 ta ta ta taaaa 🎵...
                "></Dialogue>
                </section>
                
                
                <Choix shown={isLastPhrase}
                    contenus="Stop Mozart, qu’est-ce que vous faites ?/Je suis désolé mais il va me falloir ce fauteuil."
                    liens={[
                        { href: "./5", as: "./5" },
                        { href: "./5", as: "./5" },
                        ]}                   
                ></Choix>
            </section>
            
        </>
    )
}

export default Page14;