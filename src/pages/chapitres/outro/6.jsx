import Choix from '../../../app/components/Choix'
import '../../../app/styles/outroPage.css'
import { useState, useEffect } from 'react';


function Page29() {

    let [isBlackout, setIsBlackout] = useState(true)

    useEffect(() => {
        // Perform localStorage action
        setTimeout(() => {
            setIsBlackout(false)
        }, 1000);

    }, [])

    // const handleClick = () => {
    //     setIsBlackout(true);
    //     setTimeout(() => {
    //         router.push('../../')
    //     }, 500);
    // }


    return (
        <>
            <section className="page">
                <section className={(isBlackout ? `${"blackout"}` : `${"blackoutHidden"}`)}></section>

                <section className="texture"></section>
                <div className='container3'>
                    <div className='circle'></div>
                    <p className='final_text'>Si l’histoire ne peut être changée, elle peut être racontée par le biais de ces œuvres. <br /><br />Merci à vous qui prenez le temps de regarder toutes ces créations. </p>
                </div>

                <section className="boutons">
                    <Choix shown={true}
                        contenus="Recommencer le jeu"
                        liens={[
                            { href: "../intro/[id]", as: "../intro/1" },
                        ]}
                    ></Choix>
                </section>
                
                <section className="boutons">
                    <Choix shown={true}
                        contenus="Revenir au menu"
                        liens={[
                            { href: "../../", as: "../../" },
                        ]}
                    ></Choix>
                </section>
            </section>

        </>
    )
}

export default Page29;