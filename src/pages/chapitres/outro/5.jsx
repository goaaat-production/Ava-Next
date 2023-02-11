import Choix from '../../../app/components/Choix'
import '../../../app/styles/outroPage.css'

function Page28() {


    return (
        <>
            <section className="page">
            <section className="texture"></section>
            <div className='container2'>
                <div className='circle'></div>
                <p>Et l’incendie et ses victimes ne seront jamais oubliés. </p>

</div>
                <Choix shown={true}
                contenus="Suivant"
                liens={[
                    { href: "./[id]", as: "./6" },
                ]}
            ></Choix>
            </section>

        </>
    )
}

export default Page28;