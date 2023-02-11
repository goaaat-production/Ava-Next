import Choix from '../../../app/components/Choix'
import '../../../app/styles/outroPage.css'

function Page29() {


    return (
        <>
            <section className="page">
            <section className="texture"></section>
            <div className='container3'>
                <div className='circle'></div>
                <p className='final_text'>Si l’histoire ne peut être changée, elle peut être racontée par le biais de ces œuvres. <br/><br/>Merci à vous qui prenez le temps de regarder toutes ces créations. </p>
</div>
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

export default Page29;