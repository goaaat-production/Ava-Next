import styles from '../styles/guides.module.css'

function Guide(props){
    return(
        <>
            <section className={styles.wrapper}>
                <h4>{props.contenu}</h4>
            </section>
        </>
    )
}



export default Guide;
