import styles from '../styles/components/guides.module.css'

function Guide(props){
    return(
        <>
            <section className={styles.wrapper}>
                <section className={styles.circle}></section>
                <h4 className={styles.contenu}>{props.contenu}</h4>
            </section>
        </>
    )
}



export default Guide;
