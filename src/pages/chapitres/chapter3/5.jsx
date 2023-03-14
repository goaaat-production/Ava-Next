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
            <section className='texture'></section>

                <Header objet1={true} objet2={true} objet3={true}></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../charles-quint-ramassant-le-pinceau-de-titien.png' alt='Statue : Mozart Expirant'></img>
                    </section>

                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue={":Titien : MAGNIFICO !!!/ :Titien : C’est le plus beau de tous les tableaux que j'ai vu !! Prends mon pinceau, tu en es digne !/ :Titien : Nous t’appellerons " + prenom +" De Vinci, l’incomparable, l’unique " + prenom + " De Vinci. À toi la gloire ! / :Capitaine : " + prenom + " ! T'as récupéré le pinceau ? Parfait !/ :Capitaine : On a tout ce qu'il faut, ramène toi au navire !"}></Dialogue>

                </section>

                
                <Choix shown={isLastPhrase}
                    contenus="J'y vais"
                    liens={[
                        { href: "../chapter4/1", as: "../chapter4/1" },
                        ]}                     
                ></Choix>
            </section>
            
        </>
    )
}

export default Page20;


