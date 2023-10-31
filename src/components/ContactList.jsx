import React, { useContext, useEffect } from 'react'
import { contactContext } from '../contexts/ContactContextProvider'
import ContactCard from './ContactCard'

const ContactList = () => {
  const {getContacts, contacts} = useContext(contactContext)
  useEffect(()=> {
    getContacts()
  }, [])


  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {contacts.map((contact)=>(
      <ContactCard{...contact} key={contact.id}
      />
      ))}
      </div>
  )
}

export default ContactList