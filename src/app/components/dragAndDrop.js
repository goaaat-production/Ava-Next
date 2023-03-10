import React from 'react';
import { useRouter } from 'next/router'
import ItemsDND from './itemsDND';
import { useState, useEffect } from "react";
import { useDrop } from 'react-dnd';
import { useDrag } from 'react-dnd';
import styles from '../styles/components/dragAndDrop.module.css'
import Dialogue from './Dialogues';
import { Preview } from 'react-dnd-preview'
import Choix from './Choix';

const ItemList = [
    {
        id: 0,
        url: "/objet1.png"
    },
    {
        id: 1,
        url: "/objet2.png"
    },
    {
        id: 2,
        url: "/objet3.png"
    }
]

const baseItemList = [
    {
        id: 0,
        url: "/objet1.png"
    },
    {
        id: 1,
        url: "/objet2.png"
    },
    {
        id: 2,
        url: "/objet3.png"
    }
]


var NombreObjet = 0;

var Board1reussi = true
var Board2reussi = true
var Board3reussi = true

let gagné = false;

var globalItemId = null

var DialogueCap = " :Capitaine : Place les objets au bon endroit !"

export const generatePreview = ({ itemType, item, style }) => {
    return <div className={styles.preview} style={style}><img src={baseItemList[item.id].url}></img></div>
}



function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
    }

    return arr;
}


function IsFinish(array) {
    if (array.length === 1) {
        console.log(array.length===1)
        return true
    }
}



function DragAndDrop() {
    const router = useRouter()
    let [isLastPhrase, setIsLastPhrase] = useState(false);

    const gagné = () => {
        console.log('Vous avez gagné')
        // router.push('./3')    
    }


    function DialogueCapitaine(itemId, boardId) {
        if (itemId === 2 & boardId === 1) {
            return (
                ":Capitaine : Oui le siège de Mozart fait un parfait contrepoids pour redresser le navire. ")
        }
        else if (itemId === 0 & boardId === 2) {
            return (
                ":Capitaine : Exactement ! Le ruban va pouvoir récupérer les gens à la mer !")
        }
        else if (itemId === 1 & boardId === 3) {
            return (
                ":Capitaine : Parfait ! On va pouvoir repeindre sur les flammes.")
        }


        else if (itemId === 2 & boardId !== 1) {
            return (
                ":Capitaine : Noon ! On a besoin de poids à tribord !  ")
        }
        else if (itemId === 1 & boardId !== 3) {
            return (
                ":Capitaine : Pas ici ! Le pinceau peut nous aider à éteindre les flammes... ")
        }
        else if (itemId === 0 & boardId !== 2) {
            return (
                ":Capitaine : Non pas là ! Le ruban doit pouvoir récuperer des gens")
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
        if (itemId === 2 & boardId === 1) {
            setBoard((board) => [...board, pictureList[0]]);
            removeObjectWithId(ItemList, itemId)
            NombreObjet += 1;
            DialogueCap = DialogueCapitaine(2, 1)
        }
        else if (itemId === 0 & boardId === 2) {
            setBoard2((board2) => [...board2, pictureList[0]]);
            removeObjectWithId(ItemList, itemId)
            NombreObjet += 1;
            DialogueCap = DialogueCapitaine(0, 2)
        }
        else if (itemId === 1 & boardId === 3) {
            setBoard3((board3) => [...board3, pictureList[0]]);
            removeObjectWithId(ItemList, itemId)
            NombreObjet += 1;
            DialogueCap = DialogueCapitaine(1, 3)
        }
        else if (itemId === 2 & boardId !== 1) {


            if (boardId === 2) {
                Board2reussi = false
                DialogueCap = DialogueCapitaine(2, 1)
            }
            else if (boardId === 3) {
                Board3reussi = false
                DialogueCap = DialogueCapitaine(2, 3)
            }
        }
        else if (itemId === 1 & boardId !== 3) {
            if (boardId === 2) {
                Board2reussi = false
                DialogueCap = DialogueCapitaine(1, 2)
            }
            else if (boardId === 1) {
                Board1reussi = false
                DialogueCap = DialogueCapitaine(1, 1)
            }

        }
        else if (itemId === 0 & boardId !== 2) {


            if (boardId === 1) {
                Board1reussi = false
                DialogueCap = DialogueCapitaine(0, 1)
            }
            else if (boardId === 3) {
                Board3reussi = false
                DialogueCap = DialogueCapitaine(0, 3)
            }
        }
    }


    const toggle = () => {
        this.setState(prev => ({ reveal: !prev.reveal }))
    }



    return (
        <>
            <Preview generator={generatePreview} />
            <div className={styles.content}>
               
                <div className={styles.boards}>
                        <img src='/lincendie-du-steamer-austria.png'></img>
                        <div className={styles.boardSlots}>
                            <div className={styles.boardSlot1} ref={drop}>
                                <div id="board1" className={`${styles.board1} ${(!Board1reussi ? styles.Shaking : '')}`}  style={{
                                    backgroundColor: isOver ? "rgba(255,255,255,100%)" : "rgba(0,0,0,0)",
                                    width: isOver ? "30vw" : "15vw",
                                    height: isOver ? "30vw" : "15vw",
                                    opacity: IsFinish(board)? '0%' : '100%'
                                }} >
                                    {board.map((item) => {
                                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                                    })}
                                </div>
                            </div>
                            <div className={styles.boardSlot2} ref={drop2}>
                                <div id="board2" className={`${styles.board2} ${(!Board2reussi ? styles.Shaking : '')}`} style={{
                                    backgroundColor: isOver2 ? "rgba(255,255,255,100%)" : "rgba(0,0,0,0)",
                                    width: isOver2 ? "30vw" : "15vw",
                                    height: isOver2 ? "30vw" : "15vw",
                                    opacity: IsFinish(board2) ? '0%' : '100%'
                                }} >
                                    {board2.map((item) => {
                                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                                    })}
                                </div>
                            </div>
                            <div className={styles.boardSlot3} ref={drop3}>
                                <div id="board3" className={`${styles.board3} ${(!Board3reussi ? styles.Shaking : '')}`} style={{
                                    backgroundColor: isOver3 ? "rgba(255,255,255,100%)" : "rgba(0,0,0,0)",
                                    width: isOver3 ? "30vw" : "15vw",
                                    height: isOver3 ? "30vw" : "15vw",
                                    opacity: IsFinish(board3) ? '0%' : '100%'
                                }} >

                                    {board3.map((item) => {
                                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={styles.dialogue}>
                        {<Dialogue setIsLastPhrase={setIsLastPhrase} dialogue={DialogueCap}></Dialogue>}
                        </div>
                    
                </div>
                
                <div className={(ItemList.length >= 1 ? `${styles.items}` : `${styles.items} ${styles.hidden}`)}>
                    {ItemList.map((item) => {
                        return <ItemsDND key={item.id} url={item.url} id={item.id} />
                    })}
                </div>
                <Choix shown={ItemList.length <= 0}
                    contenus="Vous êtes sauvés !"
                    liens={[
                        { href: "./3", as: "./3" },
                    ]}
                ></Choix>

                <div>
                    {
                        (NombreObjet === 3 ? gagné() : null)
                    }
                </div>

            </div>


        </>

    )
}

export default DragAndDrop