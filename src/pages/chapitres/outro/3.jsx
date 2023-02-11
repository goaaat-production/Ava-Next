import Choix from '../../../app/components/Choix'
import styles from '../../../app/styles/components/outroMozart.module.css'
import '../../../app/styles/outroDialogue.css'

function Page26() {


    return (
        <>

            <section className={styles.page}>
                <div className='container'>
                <div className='circle'></div>
                <p className="outro_phrase">J’ai été immortalisé dans la composition de ma dernière symphonie.</p>
                </div>
            <Choix shown={true}
                    contenus="Suivant"
                    liens={[
                        { href: "./[id]", as: "./4" },
                        ]}   
                ></Choix>
            </section>
        </>
    )
}

export default Page26;