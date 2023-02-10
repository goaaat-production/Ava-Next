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

    function vide(){

    }

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
                <Header></Header>
                <div className={styles.container}>
                    <img src='/embarquement-de-la-duchesse-dangouleme-a-pauillac.png' className='tableau' />
                    <div className={styles.boat} onClick={clickOnBoat}></div>
                    <div className={styles.men} onClick={clickOnMen}></div>
                    <div className={styles.ribbon} onClick={clickOnRibbon}></div>
                </div>

                <div className="container">
                    {clickedObject === "" &&
                        <Dialogue setIsLastPhrase={vide} dialogue="
                        :Capitaine : Trouve moi un objet qui
                        pourrait secourir mes hommes.
                        "></Dialogue>}
                    {clickedObject === "bateau" &&
                        <Dialogue setIsLastPhrase={vide} dialogue="
                        :Duchesse : Mon navire ? Enfin, soyez réaliste...
                        "></Dialogue>}

                    {clickedObject === "hommes" &&
                        <Dialogue  setIsLastPhrase={vide} dialogue="
                        :Duchesse : Mais ce sont mes hommes. Vous n’allez pas en couler d’autres !"></Dialogue>
                    }
                    {clickedObject === "ruban" &&
                        <Dialogue setIsLastPhrase={setIsLastPhrase} dialogue="
                        :Duchesse : Judicieux choix ! Les naufragés sont peints de petite taille, mon bandeau suffira largement.../ :Duchesse : Edgar, passez dont ce bandeau à notre ami !"></Dialogue>
                    }
                </div>


                <div className='container'>
                    <p className='consigne'>
                        {clickedObject === "" &&
                           "Appuyez sur les zones indiquées du tableau"}
                        {clickedObject === "bateau" &&
                           "Mauvais objet, cherchez encore"}
                        {clickedObject === "hommes" &&
                           "Mauvais objet, cherchez encore"}
                        {clickedObject === "ruban"&&
                           ""}

                    </p>
                </div>
                {clickedObject === "ruban" &&
                    <Choix shown={isLastPhrase}
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