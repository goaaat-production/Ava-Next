import { useState, useEffect} from 'react';
import Choix from '../../../app/components/Choix'
import styles from '../../../app/styles/components/outroMozart.module.css'
import '../../../app/styles/outroDialogue.css'

function Page26() {

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
            router.push('./4')
        }, 500);
    }


    return (
        <>

            <section className={styles.page}>
                <section className={(isBlackout ? `${"blackout"}` : `${"blackoutHidden"}`)}></section>

                <div className='container'>
                <div className='circle'></div>
                <p className="outro_phrase">J’ai été immortalisé dans la composition de ma dernière symphonie.</p>
                </div>


                <section className="boutons" onClick={handleClick}>
                    <Choix shown={true}
                            contenus="Suivant"
                            liens={[
                                { href: "./[id]", as: "./4" },
                                ]}   
                        ></Choix>
                </section>
            </section>
        </>
    )
}

export default Page26;