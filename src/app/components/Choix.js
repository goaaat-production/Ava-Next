import styles from '../components/choix.module.css'

function Choix(props){

    let contenus = props.contenus.split('/')

    function handleClick(variable){
        console.log(variable)
    }

    return(
        <>
            <section className={(props.shown ? styles.wrapper : `${styles.wrapper} ${styles.hidden}`)}>
            {contenus.map((item, index) =>(
                <button key={index} onClick={() => handleClick(item)}>{item}</button>
            ))}
            </section>
        </>
    )
}

export default Choix;
