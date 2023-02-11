import styles from '../styles/components/headerObjets.module.css'
import Link from 'next/link'

function Header(props) {



    return (

        <>
            <section className={styles.header}>
                <div className={styles.objetsWrapper}>
                    <div className={styles.fill}></div>


                    {(!props.objet1 ?
                        <div className={`${styles.objets}`}></div>
                        : <div className={`${styles.objet1}`}></div>)}
                    {(!props.objet2 ?
                        <div className={`${styles.objets}`}></div>
                        : <div className={`${styles.objet2}`}></div>)}
                    {(!props.objet3 ?
                        <div className={`${styles.objets}`}></div>
                        : <div className={`${styles.objet3}`}></div>)}
                </div>
            </section>
        </>
    )
}

export default Header;