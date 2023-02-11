import Choix from '../../../app/components/Choix'
import styles from '../../../app/styles/components/outroDuchesse.module.css'
import '../../../app/styles/outroDialogue.css'



function Page25() {


    return (
        <>
             {/*<img className='background-image' src='../../embarquement-de-la-duchesse-dangouleme-a-pauillac.png'>      </img>*/ }       
            <section className={styles.page}>

                <div className='container'>
                <div className='circle'></div>
                <p className="outro_phrase">J’ai survécu à la révolution, et je m’en vais à l’arrivée du général de Napoléon.</p>
                </div>
                <div className='animation'>
                
<img class="opacity_duch" src="../../duchesse_mask.png"></img>
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