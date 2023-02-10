import { useState, useEffect} from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'


function Page23(){

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
                <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : l incendie du steamer austria'></img>
                
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue={":Capitaine : Ca y est ?! On est sauvés ?/ :Matelot : Hourra !!! On est sauvés !/ :Capitaine : Merci à toi " + prenom + " ! Bon vent moussaillon !"}></Dialogue>

                <Choix shown={isLastPhrase}
                    contenus="La bise capitaine"
                    liens={[
                        { href: "../outro/[id]", as: "../outro/1" },
                        ]}   
                ></Choix>

            </section>
            
        </>
    )
}

export default Page23;