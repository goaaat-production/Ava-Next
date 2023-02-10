import React from 'react';
import ItemsDND from './itemsDND';
import { useState } from "react";
import { useDrop } from 'react-dnd';
import { useDrag } from 'react-dnd';
import styles from '../styles/components/dragAndDrop.module.css'
import Dialogue from './Dialogues';
const ItemList = [
    {
        id: 1,
        url: "https://www.facebook.com/images/fb_icon_325x325.png"
    },
    {
        id: 2,
        url: "https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
    },
    {
        id: 3,
        url: "https://www.facebook.com/images/fb_icon_325x325.png"
    }
]
var NombreObjet = 0;

var Board1reussi = true
var Board2reussi = true
var Board3reussi = true
var DialogueCap = " :Capitaine : Place les objets au bon endroit !"

export const generatePreview = ({itemType, item, style}) => {
    return <div  style={style}>{itemType}</div>
  } 
function Gagné(){
    console.log('Vous avez gagné')
}

function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
  
    return arr;
  }
  



function DragAndDrop() {

    let [isLastPhrase, setIsLastPhrase] = useState(false);


    function DialogueCapitaine(itemId,boardId) {
        if (itemId === 3 & boardId === 1) {
            return(
            ":Capitaine : Exactement ! ")
        }
        else if (itemId === 1 & boardId === 2) {
            return(
            ":Capitaine : Oui ! ")
        }
        else if (itemId === 2 & boardId === 3) {
            return(
            ":Capitaine : Bravo !")
        }


        else if (itemId === 3 & boardId !== 1) {
            return(
            ":Capitaine : Noon ! On a besoin de poid à tribord !  ")
        }
        else if (itemId === 2 & boardId !== 3) {
            return(
            ":Capitaine : Pas ici ! Le pinceau peut nous aider à éteindre les flammes... ")
        }
        else if (itemId === 1 & boardId !== 2){
            return(
            ":Capitaine : Non pas là ! On a besoin du ruban à l'avant du bâteau pour récuperer les noyés")
        }
    }
    




    const [board, setBoard] = useState([

    ]);
    const [board2, setBoard2] = useState([

    ]);
    const [board3, setBoard3] = useState([

    ]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => AddImageToBoard(item.id, 1),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))
    const [{ isOver2 }, drop2] = useDrop(() => ({
        accept: "image",
        drop: (item) => AddImageToBoard(item.id, 2),
        collect: (monitor) => ({
            isOver2: !!monitor.isOver(),
        })
    }))
    const [{ isOver3 }, drop3] = useDrop(() => ({
        accept: "image",
        drop: (item) => AddImageToBoard(item.id, 3),
        collect: (monitor) => ({
            isOver3: !!monitor.isOver(),
        })
    }))    
    




    const AddImageToBoard = (itemId, boardId) => {
        const pictureList = ItemList.filter((item) => itemId === item.id); // récupère l'objet de l'ID = itemId
        if (itemId === 3 & boardId === 1) {
            setBoard((board) => [...board, pictureList[0]]);
            removeObjectWithId(ItemList, itemId)
            NombreObjet += 1;
            DialogueCap = DialogueCapitaine(3,1)
        }
        else if (itemId === 1 & boardId === 2) {
            setBoard2((board2) => [...board2, pictureList[0]]);
            removeObjectWithId(ItemList, itemId)
            NombreObjet += 1;
            DialogueCap = DialogueCapitaine(1,2)
        }
        else if (itemId === 2 & boardId === 3) {
            setBoard3((board3) => [...board3, pictureList[0]]);
            removeObjectWithId(ItemList, itemId)
            NombreObjet += 1;
            DialogueCap = DialogueCapitaine(2,3)
        }
        else if (itemId === 3 & boardId !== 1) {

            
            if (boardId===2) {
                Board2reussi =false
                DialogueCap = DialogueCapitaine(3,1)
            }
            else if (boardId===3) {
                Board3reussi =false
                DialogueCap = DialogueCapitaine(3,3)
            }
        }
        else if (itemId === 2 & boardId !== 3) {
                        if (boardId===2) {
                Board2reussi =false
                DialogueCap = DialogueCapitaine(2,2)
            }
            else if (boardId===1) {
                Board1reussi =false
                DialogueCap = DialogueCapitaine(2,1)
            }

        }
        else if (itemId === 1 & boardId !== 2) {


            if (boardId===1) {
                Board1reussi =false
                DialogueCap = DialogueCapitaine(1,1)
            }
            else if (boardId===3) {
                Board3reussi =false
                DialogueCap = DialogueCapitaine(1,3)
            }
        }


        console.log("ItemList = ", ItemList)
    }


    const toggle = () => {
        this.setState(prev => ({ reveal: !prev.reveal }))
      }
    




    return (
        <>
            <div className={styles.content}>
                <div className={styles.boards}>
                    <img src='/lincendie-du-steamer-austria.png'></img>
                    <div id= "board1" className={`${styles.board1} ${(!Board1reussi? styles.Shaking : '')}`} ref={drop} style={{
                        backgroundColor: isOver? "yellow" : "white",
                        opacity:'40%'
                    }} >   
                        {board.map((item) => {
                            return <ItemsDND key={item.id} url={item.url} id={item.id} />
                        })}
                    </div>
    

                    
                    <div id= "board2" className={`${styles.board2} ${(!Board2reussi? styles.Shaking : '')}`} ref={drop2} style={{
                        backgroundColor: isOver2? "yellow" : "white",
                        opacity:'40%'
                    }} >   
                        {board2.map((item) => {
                            return <ItemsDND key={item.id} url={item.url} id={item.id} />
                        })}
                    </div>
                    <div id= "board3" className={`${styles.board3} ${(!Board3reussi? styles.Shaking : '')}`} ref={drop3} style={{
                        backgroundColor: isOver3? "yellow" : "white",
                        opacity:'40%'
                    }} >   
                    
                        {board3.map((item) => {
                            return <ItemsDND key={item.id} url={item.url} id={item.id} />
                        })}
                    </div>
                </div>
                <div className={styles.item}>
                    {ItemList.map((item) => {
                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                    })}
                </div>

                <div>
                    {
                        (NombreObjet === 3 ? Gagné() : null)
                    }
                </div>
                <div>
                <Dialogue setIsLastPhrase={setIsLastPhrase}   dialogue= {DialogueCap}></Dialogue>
                </div>
            </div>


        </>

    )
}

export default DragAndDrop