import styles from '../styles/choix.module.css'
import Link from 'next/link'

function Choix(props){

    let contenus = props.contenus.split('/')
    console.log(props.liens[0]["href"] + (props.liens[0]["as"] ? props.liens[0]["as"] : ""))            


    return(
        
        <>
            <section className={(props.shown ? styles.wrapper : `${styles.wrapper} ${styles.hidden}`)}>
            {contenus.map((item, index) =>(
                    <button key={index}> <Link href={props.liens[index]["href"]} as={props.liens[index]["as"]}>{contenus[index]}</Link></button>
            ))}
            </section>
        </>
    )
}

export default Choix;
