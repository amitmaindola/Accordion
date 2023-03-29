import React from 'react'
import Accordion from '../Accordion/Accordion'

function AccordionList(props) {
  return (
    <>
      {props.itemList.map((item)=>{
        return <Accordion heading = {item.title} desc={item.desc}/>
      })}
    </>
  )
}

export default AccordionList