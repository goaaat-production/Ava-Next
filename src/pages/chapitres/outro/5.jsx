import Choix from '../../../app/components/Choix'

function Page28() {


    return (
        <>
            <section className="page">
                <p>FIN</p>

                <Choix shown={true}
                    contenus="Recommencer le jeu"
                    liens={[
                        { href: "../intro/[id]", as: "../intro/1" },
                    ]}
                ></Choix>

                <Choix shown={true}
                    contenus="Revenir au menu"
                    liens={[
                        { href: "../../", as: "../../" },
                    ]}
                ></Choix>
            </section>

        </>
    )
}

export default Page28;