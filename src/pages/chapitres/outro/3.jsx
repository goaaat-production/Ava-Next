import Choix from '../../../app/components/Choix'

function Page26() {


    return (
        <>
            <section className="page">
                <p>J’ai été immortalisé dans la composition de ma dernière symphonie.</p>

            </section>

            <Choix shown={true}
                    contenus="Suivant"
                    liens={[
                        { href: "./[id]", as: "./4" },
                        ]}   
                ></Choix>
        </>
    )
}

export default Page26;