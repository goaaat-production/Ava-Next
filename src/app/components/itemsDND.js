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

  <div ref={drag} style={{transition:'all 0s', opacity: isDragging ? 0 : 1,}}>
    <img className = {styles.item} src={url} ref={drag}/>  
  </div>
  
  </>
  ) 
  
}

export default ItemsDND