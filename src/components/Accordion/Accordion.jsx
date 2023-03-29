import React, { useState } from 'react'
import AccordionBody from '../AccordionBody/AccordionBody'
import AccordionHead from '../AccordionHead/AccordionHead'


function Accordion(props) {
  const [show, setShow] = useState(false);

  return (
    <div style={{backgroundColor: 'white', padding: '5px 20px', color: 'black', marginBottom: '20px'}}>
        <AccordionHead heading = {props.heading} show = {show} setShow = {setShow}/>
        {show && <AccordionBody desc ={props.desc}/>}
    </div>
  )
}

export default Accordion