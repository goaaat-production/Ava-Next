import Choix from '../../../app/components/Choix'
import '../../../app/styles/outroPage.css'
import { useState, useEffect } from 'react';


function Page28() {

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
            router.push('./6')
        }, 500);
    }

    return (
        <>
            <section className="page">
            <section className="texture"></section>

                <section className={(isBlackout ? `${"blackout"}` : `${"blackoutHidden"}`)}></section>

                <section className="texture"></section>
                <div className='container2'>
                    <div className='circle'></div>
                    <p>Et l’incendie et ses victimes ne seront jamais oubliés. </p>

                </div>
                <section className="boutons" onClick={handleClick}>
                    <Choix shown={true}
                        contenus="Suivant"
                        liens={[
                            { href: "./[id]", as: "./6" },
                        ]}
                    ></Choix>
                </section>
                
            </section>

        </>
    )
}

export default Page28;