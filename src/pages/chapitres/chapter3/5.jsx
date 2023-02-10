import { useState, useEffect} from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page20(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    let [prenom, setPrenom] = useState("prénom");


    useEffect(() => {
        // Perform localStorage action
        setPrenom(localStorage.getItem("nom"))
        console.log(prenom);

    }, [])

    return(
        <>  
            <section className="page">
                <Header objet1={true} objet2={true}></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../charles-quint-ramassant-le-pinceau-de-titien.png' alt='Statue : Mozart Expirant'></img>
                    </section>

                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue={":Titien : MAGNIFICO !!!/ :Titien : C’est le plus de tous les tableaux que je n’ai jamais vu !! Prends mon pinceau, tu en es digne !/ :Titien : " + prenom +" ? " + prenom +" ? Votre / :Capitaine : " + prenom + " ! T'as récupéré le pinceau ? Parfait !/ :Capitaine : On a tout ce qu'il faut, ramène toi au navire !"}></Dialogue>

                </section>

                
                <Choix shown={isLastPhrase}
                    contenus="J'y vais"
                    liens={[
                        { href: "../chapter4/[id]", as: "../chapter4/1" },
                        ]}                     
                ></Choix>
            </section>
            
        </>
    )
}

export default Page20;


