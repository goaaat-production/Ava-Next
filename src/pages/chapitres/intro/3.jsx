import { useState, useEffect} from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page3(){

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
                        <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                    </section>

                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue={":Capitaine : "+ prenom + " ? Original.../ :Capitaine : Qu'est-ce que tu fait là ?"}></Dialogue>
                </section>  
                <Choix shown={isLastPhrase}
                    contenus="Je vous regarde/Rien, je ne fait pas partie du navire..."
                    liens={[
                        { href: "./[id]", as: "./4" },
                        { href: "./[id]", as: "./4" },                        
                        ]}                    
                ></Choix>
            </section>
            
        </>
    )
}

export default Page3;