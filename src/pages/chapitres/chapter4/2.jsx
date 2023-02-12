import { useState } from 'react';
import Link from "next/link"
import Dialogue from '../../../app/components/Dialogues'
import '../../../app/styles/dialoguePage.css'
import Guide from '../../../app/components/Guides'
import Choix from '../../../app/components/Choix'
import DragAndDrop from '../../../app/components/dragAndDrop';
import { generatePreview } from '../../../app/components/dragAndDrop';
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import Header from '../../../app/components/HeaderObjets'
function Page22(){

    let [isLastPhrase, setIsLastPhrase] = useState(false);

    return(
        <>  
            <section className="page">
            <section className='texture'></section>

           <Header></Header>     
            <DndProvider backend={TouchBackend} >
                <DragAndDrop/>
            </DndProvider> 


 

            </section>
            
        </>
    )
}

export default Page22;