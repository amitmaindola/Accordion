import React from 'react'
import AccordionList from '../../components/AccordionList/AccordionList';

const faqs = [
    {
      title: "What types of laundry services can you offer?",
      desc: "We offer a range of laundry services including wash and fold, dry cleaning, ironing, and more. We also offer pick-up and delivery services for your convenience.",
    },
    {
      title: "What is your pricing structure?",
      desc: "Our pricing structure varies depending on the type and volume of laundry you need to be serviced. We offer competitive pricing and can provide a quote based on your specific needs.You can check the pricing on Pricing section for more and detailed information.",
    },
    {
      title: "How do I schedule a pickup or delivery?",
      desc: "You can schedule a pickup or delivery by phone or through our website ( website link). Our team will confirm your appointment and provide any additional details or instructions.",
    },
    {
      title: "What is your turnaround time for laundry services?",
      desc: "Our turnaround time varies depending on the type and volume of laundry you need to be serviced. We strive to provide a quick and efficient turnaround time while ensuring high-quality results.We provide the delivery within 18 hours of pickup.",
    },
    {
      title: "What is your policy on lost or damaged items?",
      desc: "We take great care in handling your laundry and strive to minimize the risk of lost or damaged items. In the unlikely event that an item is lost or damaged, we will work with you to find a suitable resolution.",
    },
    {
      title: "Do you offer eco-friendly laundry options?",
      desc: "Yes, we offer eco-friendly laundry options such as using environmentally friendly detergent and reducing water usage.",
    },
    {
      title: "What are your business hours?",
      desc: "Our business hours are [insert business hours]. We may also be available for after-hours and weekend services by appointment.",
    },
    {
      title: "How can I contact you for customer support or questions?",
      desc: "You can contact us by phone, email, or through our website's contact form. Our team is available to answer any questions or concerns you may have.",
    },
    {
      title: "Does laundry express provide free home delivery?",
      desc: "Yes, laundry express provides free home pickup and delivery at all its laundry & dry clean shops.",
    },
];


function FAQ() {
  return (
    <div style={{maxWidth: 1000, margin: '40px auto', padding: '10px 40px 20px', borderRadius: '20px', backgroundColor: '#00b', color: '#fff'}}>
        <h2 style={{textAlign: 'center'}}>Frequently Asked Questions</h2>
        <AccordionList itemList={faqs}/>
    </div>
  )
}

export default FAQ