import { useState, useEffect} from 'react';
import '../../../app/styles/outroPage.css'
import Choix from '../../../app/components/Choix'

function Page24() {

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
            router.push('./2')
        }, 500);
    }

    return (
        <>
            <section className="page">
            <section className="texture"></section>
            <section className={(isBlackout ? `${"blackout"}` : `${"blackoutHidden"}`)}></section>

                <div className='container'>
                <div className='circle'></div>
                <div className='text'>
                <p>Dans un monde fictif, l’histoire <br/>peut être réécrite ou inventée.</p>
                </div>
                </div>
                
            <section className="boutons" onClick={handleClick}>
                <Choix shown={true}
                    contenus="Suivant"
                    liens={[
                        { href: "./[id]", as: "./2" },
                        ]}   
                ></Choix>

            </section>
            </section>
            

        </>
    )
}

export default Page24;