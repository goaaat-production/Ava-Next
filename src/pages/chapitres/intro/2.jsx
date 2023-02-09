import { useState, useRef} from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import { useRouter } from 'next/router'



function Page3(){
    const router = useRouter()

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    let nameRef = useRef();
    
    const handleFormSubmit = () => {
        localStorage.setItem('nom',  nameRef.current.value);
        router.push('./3')
    }


    return(
        <>  
            <section className="page">
                <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                    :Matelot : Le pont est en feu !/ 

                    :Capitaine : Jetez les canaux à l’eau ! Les femmes et les enfants d’abord !/

                    :Matelot : Capitaine, le feu se propage !/ 

                    :Capitaine : Éteignez-moi ce feu !/

                    :Capitaine : Il nous faut plus de monde pour nous aider !!!/

                    :Capitaine : Toi là bas !/

                    :Capitaine : Que est ton nom ?
                "></Dialogue>
                

                <section className={(isLastPhrase ? "wrapper" : `${"wrapper"} ${"hidden"}`)}>
                    <label htmlFor="nom">Nom</label>
                    <input ref={nameRef} id="nom" type="text" />
                    <button onClick={handleFormSubmit}>Valider</button>
                </section>
            </section>
            
        </>
    )
}

export default Page3;