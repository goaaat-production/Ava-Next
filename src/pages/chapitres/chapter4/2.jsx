import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import DragAndDrop from '../../../app/components/dragAndDrop';
import { generatePreview } from '../../../app/components/dragAndDrop';
import { Preview } from 'react-dnd-preview'
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
function Page22(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
                
            <DndProvider backend={TouchBackend} >
                <DragAndDrop/>
                <Preview generator={generatePreview}/>
            </DndProvider> 


                {/* <Guide contenu="Jeu DragAndDrop"></Guide>

                <img className="tableau" src='../../lincendie-du-steamer-austria.png' alt='Tableau : l incendie du steamer austria'></img>
                
                <Choix shown={true}
                    contenus="DRAG AND DROP GAGNÉ"
                    liens={[
                        { href: "./[id]", as: "./3" },
                        ]}   
                ></Choix> */}

            </section>
            
        </>
    )
}

export default Page22;