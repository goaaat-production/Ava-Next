import { useState } from 'react';
import styles from './dialogues.module.css'

function Dialogue(props){
    
    const phrases = DialogueToPhrases(props.dialogue);
    const enonciateur = DialogueToEnonciateur(props.dialogue)

    let [idPhrase, setIdPhrase] = useState(0)
    


    function handleClick() {
        setIdPhrase(idPhrase < phrases.length - 1 ? idPhrase += 1 : idPhrase);

        if(idPhrase >= (phrases.length - 1)){
            props.setIsLastPhrase(true);
        }
    }

    function DialogueToPhrases(dialogues){
        let splitDialogue = dialogues.split('/')
        let phrases = [];
        for(let i = 0; i< splitDialogue.length; i++){
            let dialogueEnonciateur = splitDialogue[i].split(':')
            phrases.push(dialogueEnonciateur[2])
        }

        return phrases
    }

    function DialogueToEnonciateur(dialogues){
        let splitDialogue = dialogues.split('/')
        let enonciateurs = [];
        for(let i = 0; i< splitDialogue.length; i++){
            let dialogueEnonciateur = splitDialogue[i].split(':')
            enonciateurs.push(dialogueEnonciateur[1])
        }
        
        return enonciateurs
    }

    

    return(
        <>
            <section className={styles.wrapper}>
                <div className={ (enonciateur[idPhrase] === "Capitaine " ? `${styles.left} ` : `${styles.left} ${(styles.hidden)}`)}></div>
                <h3 className={styles.paragraphe} onClick={handleClick}>{enonciateur[idPhrase] + " : " + phrases[idPhrase]}</h3>
                <div className={(enonciateur[idPhrase] === "Capitaine " ? `${styles.right} ${(styles.hidden)}` : `${styles.right}`)}></div>
            </section>
        </>
        
    )
}

export default Dialogue;



