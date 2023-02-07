import Link from "next/link"
import { useState } from 'react';
import Dialogue from '../app/components/Dialogues'
import Guide from '../app/components/Guides'
import Choix from '../app/components/Choix'

function Page2() {

    let [isLastPhrase, setIsLastPhrase] = useState(false);


    return (
        <>
            <Dialogue setIsLastPhrase={setIsLastPhrase} dialogue="
                    :Duchesse : Le pont est pont/ 

                    :Capitaine : pont pont/

                    :Capitaine : perlinpinpont/ 
            "></Dialogue>

            <Choix shown={isLastPhrase}
                contenus="Pépon/Ponpé"
                links="/Page22|/Page32|"
            ></Choix>
        </>
    )
}

export default Page2;
