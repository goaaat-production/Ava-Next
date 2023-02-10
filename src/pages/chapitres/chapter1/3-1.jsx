import { useState, useEffect } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page8(){

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
                <Header></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png' alt='Tableau : embarquement de la duchesse d angouleme a pauillac'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue={":Duchesse : C’est à moi que vous parlez de la sorte ? Savez vous qui je suis ?/ :Capitaine : Je vous pris de l’excuser madame !/ :Capitaine : "+ (prenom ? prenom : "prenom") +", vas-y avec des pincettes, c’est la fille de Louis XVI.../ :Capitaine : Il nous faut un objet qui pourrait secourir mes hommes..."}></Dialogue>
                </section>
                <Choix shown={isLastPhrase}
                    contenus="Cherchons le"
                    liens={[
                        { href: "./[id]", as: "./4" },                       
                        ]}                      
                ></Choix>
            </section>
            
        </>
    )
}

export default Page8;