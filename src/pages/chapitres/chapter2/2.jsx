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
                <Header></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../mozart-expirant.png' alt='Statue : Mozart Expirant'></img>
                    </section>
                </section>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Capitaine : C'est Mozart... Il n'as tant besoin de son fauteuil/

                    :Mozart : Que voulez vous ?
                "></Dialogue>
                
                <Choix shown={isLastPhrase}
                    contenus="J’ai besoin de quelque chose de lourd, je peux vous emprunter votre fauteuil ?/J’ai besoin de quelque chose de lourd et le capitaine a dit que vous étiez lourd"
                    liens={[
                        { href: "./[id]", as: "./3" },
                        { href: "./[id]", as: "./3" },
                        ]}                     
                ></Choix>
            </section>
            
        </>
    )
}

export default Page13;