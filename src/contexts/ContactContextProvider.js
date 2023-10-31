import axios from 'axios';
import React, { createContext, useState } from 'react'

export const contactContext = createContext()


const ContactContextProvider = ({children}) => {
    const API = 'http://localhost:8001/contacts';

    const [contacts, setContacts] = useState([])
    const [oneContact, setOneContact] = useState(null)


//! add (create)

async function addContact(newContact){
    await axios.post(API, newContact);
}

//!Read (get)
async function getContacts(){
    const result = await axios(API);
    setContacts(result.data);
}

//!DELETE 
async function deleteContact (id){
    await axios.delete(`${API}/${id}`)
    getContacts()
}

//! (get one contact)
async function getOneContact(id){
    const result= await axios(`${API}/${id}`)
    setOneContact(result.data);
}

//! save changes (patch)
async function saveContact(id, editedContact){
    axios.patch(`${API}/${id}`, editedContact)
    getContacts();
}



  return (
    <contactContext.Provider value={{
    addContact, 
    getContacts, 
    contacts, 
    deleteContact, 
    oneContact, 
    getOneContact,
    saveContact}}>
        {children}
    </contactContext.Provider>
  )
}

export default ContactContextProvider