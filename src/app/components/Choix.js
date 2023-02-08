import styles from '../styles/choix.module.css'
import Link from 'next/link'

function Choix(props){

    let contenus = props.contenus.split('/')
    let liens = props.liens.split("|")

    return(
        <>
            <section className={(props.shown ? styles.wrapper : `${styles.wrapper} ${styles.hidden}`)}>
            {contenus.map((item, index) =>(
                    <button key={index}> <Link href={liens[index]}>{contenus[index]}</Link></button>
            ))}
            </section>
        </>
    )
}

export default Choix;
