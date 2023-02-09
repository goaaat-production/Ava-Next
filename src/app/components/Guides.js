import styles from '../styles/components/guides.module.css'

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
