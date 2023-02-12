import { useState, useEffect} from 'react';

import Choix from '../../../app/components/Choix'
import styles from '../../../app/styles/components/outroTitien.module.css'
import '../../../app/styles/outroDialogue.css'

function Page27() {

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
            router.push('./5')
        }, 500);
    }


    return (
        <>

            <section className={styles.page}>
                <section className={(isBlackout ? `${"blackout"}` : `${"blackoutHidden"}`)}></section>

                <div className='container'>
                    <div className='circle'></div>
                    <p className="outro_phrase">On se souviendra toujours du jour ou l’empereur a ramassé mon pinceau.</p>
                </div>


                <section className="boutons" onClick={handleClick}>

                    <Choix shown={true}
                        contenus="Suivant"
                        liens={[
                            { href: "./[id]", as: "./5" },
                        ]}
                    ></Choix>
                </section>
            </section>

        </>
    )
}

export default Page27;