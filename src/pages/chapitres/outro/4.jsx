import Choix from '../../../app/components/Choix'
import styles from '../../../app/styles/components/outroTitien.module.css'
import '../../../app/styles/outroDialogue.css'

function Page27() {


    return (
        <>

            <section className={styles.page}>
                <div className='container'>
                    <div className='circle'></div>
                    <p className="outro_phrase">On se souviendra toujours du jour ou l’empereur a ramassé mon pinceau.</p>
                </div>

            <Choix shown={true}
                contenus="Suivant"
                liens={[
                    { href: "./[id]", as: "./5" },
                ]}
            ></Choix>
            </section>

        </>
    )
}

export default Page27;