import { useState, useEffect } from 'react';
import Choix from '../../../app/components/Choix'
import styles from '../../../app/styles/components/outroDuchesse.module.css'
import '../../../app/styles/outroDialogue.css'



function Page25() {

    let [isBlackout, setIsBlackout] = useState(true)

    useEffect(() => {
        // Perform localStorage action
        setTimeout(() => {
            setIsBlackout(false)
        }, 1000);

    }, [])

    const handleClick = () => {
        setIsBlackout(true);
        setTimeout(() => {
            router.push('./3')
        }, 500);
    }

    return (
        <>
            {/*<img className='background-image' src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png'>      </img>*/}
            <section className={styles.page}>
            <section className='texture'></section>

                <section className={(isBlackout ? `${"blackout"}` : `${"blackoutHidden"}`)}></section>


                <div className='container'>
                    <div className='circle'></div>
                    <p className="outro_phrase">J’ai survécu à la Révolution, et je m’en vais à l’arrivée du général de Napoléon.</p>
                </div>

                <div className="animation">
                </div>

                <section className="boutons" onClick={handleClick}>
                    <Choix shown={true}
                        contenus="Suivant"
                        liens={[
                            { href: "./3", as: "./3" },
                        ]}
                    ></Choix>
                </section>
            </section>




        </>
    )
}

export default Page25;