import React from 'react'

function AccordionButton(props) {
  var sign = props.show ? '-' : '+'
  return (
    <button onClick={()=>{props.setShow(!props.show)}} className='accordionBtn'}>
        {sign}
    </button>
  )
}

export default AccordionButton