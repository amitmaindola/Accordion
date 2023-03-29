import React from 'react'

function AccordionButton(props) {
  var sign = props.show ? '-' : '+'
  return (
    <button onClick={()=>{props.setShow(!props.show)}} style={{fontSize: '23px', height: '35px', borderColor: '#00f', borderRadius: '5px', backgroundColor: '#ddf'}}>
        {sign}
    </button>
  )
}

export default AccordionButton