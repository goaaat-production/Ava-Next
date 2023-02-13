import { useState, useEffect} from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'
import PagePeinture from '../../../../src/app/components/PagePeindre'


function Page18(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);
    let [peintureStyle, setPeintureStyle] = useState("pagePeindre");
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

                <Header objet1={true} objet3={true}></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../charles-quint-ramassant-le-pinceau-de-titien.png' alt='Statue : Mozart Expirant'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue={":Titien : Mon pinceau se mérite !/ :Titien : Je n’accepterai de le céder qu’à celui qui réalisera le plus beau tableau de moi./ :Capitaine : À toi de jouer " + prenom + " montre lui tes talents de peintre !/ :Capitaine : À toi de jouer !"}></Dialogue>
                
                </section>

                
            </section>
            <section className={isLastPhrase ? "pagePeindre" : "pagePeindre pagePeindreHidden"}>
                    <PagePeinture/>
                </section>
            
        </>
    )
}

export default Page18;