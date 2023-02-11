import '../../../app/styles/outroPage.css'
import Choix from '../../../app/components/Choix'

function Page24() {


    return (
        <>
            <section className="page">
                <div className='container'>
                <div className='circle'></div>
                <p>Dans un monde fictif, l’histoire <br/>peut être réécrite ou inventée.</p>
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