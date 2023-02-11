import Choix from '../../../app/components/Choix'

function Page27() {
    
    
    return (
        <>
            <section className="page">

                <p>On se souviendra toujours du jour ou l’empereur a ramassé mon pinceau.</p>

            </section>
            <Choix shown={true}
                    contenus="Suivant"
                    liens={[
                        { href: "./[id]", as: "./5" },
                        ]}   
                ></Choix>
        </>
    )
}

export default Page27;