import Choix from '../../../app/components/Choix'
import styles from '../../../app/styles/components/outroDuchesse.module.css'
import '../../../app/styles/outroDialogue.css'



function Page25() {


    return (
        <>
            <section className={styles.page}>
                <div className='container'>
                <div className='circle'></div>
                <p className="outro_phrase">J’ai survécu à la révolution, et je m’en vais à l’arrivée du général de Napoléon.</p>
                </div>
            <Choix shown={true}
                    contenus="Suivant"
                    liens={[
                        { href: "./[id]", as: "./3" },
                        ]}   
                ></Choix>
            </section>


            
        </>
    )
}

export default Page25;