import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import styles from '../../../app/styles/game1.module.css'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import Header from '../../../app/components/HeaderObjets'



function Page10() {

    let [isLastPhrase, setIsLastPhrase] = useState(false);


    let [clickedObject, setClickedObject] = useState("");

    function clickOnBoat() {
        setClickedObject("bateau")
    }

    function clickOnMen() {
        setClickedObject("hommes")
    }

    function clickOnRibbon() {
        setClickedObject("ruban")
    }


    return (
        <>
            <section className="page" >
                <div className={styles.container}>
                        <img src='/embarquement-de-la-duchesse-dangouleme-a-pauillac.png' className='tableau' />
                    <div className={styles.boat} onClick={clickOnBoat}></div>
                    <div className={styles.men} onClick={clickOnMen}></div>
                    <div className={styles.ribbon} onClick={clickOnRibbon}></div>
                </div>

                <div className="container">

                    {clickedObject === "bateau" &&
                        <Dialogue setIsLastPhrase={setIsLastPhrase} dialogue="
                :Duchesse : Mon navire ? Enfin, soyez réaliste...
            "></Dialogue>}

                    {clickedObject === "hommes" &&
                        <Dialogue setIsLastPhrase={setIsLastPhrase} dialogue="
                        :Duchesse : Mais ce sont mes hommes. Vous n’allez pas en couler d’autres !"></Dialogue>
                    }
                    {clickedObject === "ruban" &&
                        <Dialogue setIsLastPhrase={setIsLastPhrase} dialogue="
                        :Duchesse : Judicieux choix ! Les naufragés sont peints de petite taille, mon bandeau est assez long pour qu’ils s’y accrochent. Edgar, passez dont ce bandeau à notre ami !"></Dialogue>
                    }
                </div>


                {clickedObject === "ruban" &&
                    <Choix shown={true}
                        contenus="Suivant"
                        liens={[
                            { href: "./[id]", as: "./5" },
                        ]}
                    ></Choix>
                }
            </section>

        </>
    )
}

export default Page10;