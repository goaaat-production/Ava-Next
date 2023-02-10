import React from 'react'
import { useDrag } from 'react-dnd'
import styles from '../styles/components/dragAndDrop.module.css';

function ItemsDND({id, url}) {
  const [{isDragging},drag] = useDrag(() => ({
    type: "image", 
    item: {id:id},
    
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))
  
  return (
  <>

  <div ref={drag} style={{opacity: isDragging ? 0.5 : 1,}}>
    <img className = {styles.items} src={url} style={{border: isDragging ? "5px solid pink" : "0px"}} ref={drag}/>  
  </div>
  
  </>
  ) 
  
}

export default ItemsDND