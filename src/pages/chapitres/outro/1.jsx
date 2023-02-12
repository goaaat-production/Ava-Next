import '../../../app/styles/outroPage.css'
import Choix from '../../../app/components/Choix'

function Page24() {


    return (
        <>
            <section className="page">
            <section className="texture"></section>
                <div className='container'>
                <div className='circle'></div>
                <div className='text'>
                <p>Dans un monde fictif, l’histoire <br/>peut être réécrite ou inventée.</p>
                </div>
                </div>
                
            <section className="boutons">
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