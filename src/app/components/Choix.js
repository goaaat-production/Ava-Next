import styles from '../styles/components/choix.module.css'
import Link from 'next/link'

function Choix(props){

    let contenus = props.contenus.split('/')

    console.log(contenus.length)
    return(
        
        <>
            <section className={(props.shown ? styles.wrapper : `${styles.wrapper} ${styles.hidden}`)}>
                
                {(contenus.length > 1 ? 
                    <>
                        <button className={styles.reponseA}> <Link href={props.liens[0]["href"]} as={props.liens[0]["as"]}>{contenus[0]}</Link></button>
                        <button className={styles.reponseB}> <Link href={props.liens[1]["href"]} as={props.liens[1]["as"]}>{contenus[1]}</Link></button>
                    </>
                :
                    contenus.map((item, index) =>(<button key={index}> <Link href={props.liens[index]["href"]} as={props.liens[index]["as"]}>{contenus[index]}</Link></button>)
                ))}

            </section>
        </>
    )
}

export default Choix;
