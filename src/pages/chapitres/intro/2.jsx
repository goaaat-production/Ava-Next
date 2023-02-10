import { useState, useRef} from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'
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

                <Header></Header>

                <section className='dialogue'>
                    <section className='cadre'>
                        <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : incendie-du-steamer-austria'></img>
                    </section>
                    <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue="
                        :Matelot : Capitaine, le pont est en feu !/ 

                        :Capitaine : Jetez les canaux à l’eau ! Les femmes et les enfants d’abord !/

                        :Matelot : Le feu se propage !/ 

                        :Capitaine : Il nous faudrait plus de monde pour nous aider !!! /

                        :Capitaine : Vous là bas !/

                        :Capitaine : Vous !!!/

                        :Capitaine : C'est quoi votre nom ?
                    "></Dialogue>
                </section>

                <div className='container'>
                    <p className={(isLastPhrase ? `${"consigne"} ${"hidden"}` : `${"consigne"}`)}>
                        Appuyez sur les dialogues <br/>
                        pour avancer
                    </p>
                </div>

                <section className={(isLastPhrase ? "wrapper-form" : `${"wrapper-form"} ${"hidden"}`)}>
                    <label htmlFor="nom">Entrez votre nom :</label>
                    <input ref={nameRef} id="nom" type="text" />
                    <button onClick={handleFormSubmit}>Valider</button>
                </section>
            </section>
            
        </>
    )
}

export default Page3;