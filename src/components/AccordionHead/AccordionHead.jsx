import React from 'react'
import AccordionButton from '../AccordionButton/AccordionButton'

function AccordionHead(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <p style={{fontWeight: 500}}>
            {props.heading}
        </p>
        <AccordionButton show = {props.show} setShow={props.setShow}/>
    </div>
  )
}

export default AccordionHead