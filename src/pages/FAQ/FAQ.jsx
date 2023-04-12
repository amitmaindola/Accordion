import React from 'react'
import AccordionList from '../../components/AccordionList/AccordionList';

import faqs from '../../config/faq';


function FAQ() {
  return (
    <div style={{maxWidth: 1000, margin: '40px auto', padding: '10px 40px 20px', borderRadius: '20px', backgroundColor: '#00b', color: '#fff'}}>
        <h2 style={{textAlign: 'center'}}>Frequently Asked Questions</h2>
        <AccordionList itemList={faqs}/>
    </div>
  )
}

export default FAQ