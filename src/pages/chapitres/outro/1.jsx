import Choix from '../../../app/components/Choix'

function Page24() {


    return (
        <>
            <section className="page">
                <p>Dans un monde fictif, l’histoire peut être réécrite ou inventée.</p>

            </section>
            
            <Choix shown={true}
                    contenus="Suivant"
                    liens={[
                        { href: "./[id]", as: "./2" },
                        ]}   
                ></Choix>

        </>
    )
}

export default Page24;