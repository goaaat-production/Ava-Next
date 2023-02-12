import { useState, useEffect} from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'
import { useRouter } from 'next/router'




function Page23(){
    const router = useRouter()

    let [isLastPhrase, setIsLastPhrase] = useState(false);
    let [prenom, setPrenom] = useState("prénom");
    let [isBlackout, setIsBlackout] = useState(false)

    const handleClick = () => {
        setIsBlackout(true);
        setTimeout(() => {
            router.push('../outro/1')
        }, 500);
    }


    useEffect(() => {
        // Perform localStorage action
        setPrenom(localStorage.getItem("nom"))
        console.log(prenom);

    }, [])

    return(
        <>  
            <section className="page">
            <section className='texture'></section>
            <section className={(isBlackout ? `${"blackout"}` : `${"blackoutHidden"}`)}></section>


                <Header></Header>
                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../austria_fin.png' alt='Tableau : l incendie du steamer austria'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue={":Capitaine : Ca y est ?! On est sauvés ?/ :Matelot : Hourra !!! On est sauvés !/ :Capitaine : Merci à toi " + prenom + " ! Bon vent moussaillon !"}></Dialogue>

                </section>
                

                <section className={(isLastPhrase ? "wrapper-form" : `${"wrapper-form"} ${"hidden"}`)}>
                    <button onClick={handleClick}>Merci Capitaine !</button>
                </section>

            </section>
            
        </>
    )
}

export default Page23;