import Choix from '../../../app/components/Choix'

function Page25() {


    return (
        <>
            <section className="page">
                <p>J’ai survécu à la révolution, et je m’en vais à l’arrivée du général de Napoléon.</p>

            </section>


            <Choix shown={true}
                    contenus="Suivant"
                    liens={[
                        { href: "./[id]", as: "./3" },
                        ]}   
                ></Choix>
            
        </>
    )
}

export default Page25;