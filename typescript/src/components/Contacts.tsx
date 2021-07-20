import React, { useState } from 'react';
import Contact from './Contact';

interface IContacts {
    name: string,
    email: string
}

const Contacts = () => {
    const [ contact, setContact ] = useState<IContacts>({} as IContacts);
    const [contactList, setContactList] = useState<IContacts[]>([]) 

    const handleClick = () => {
        setContactList([...contactList, contact]);
        setContact({
            name: "", 
            email: ""
        });
    }

    const onChange= (e: React.ChangeEvent<HTMLInputElement>) => {

        setContact({...contact, [e.target.name]: e.target.value})
    
    }

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email);
        setContactList(newContactList);
    }

    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input 
                    value={contact.name}
                    onChange={onChange}
                    placeholder="Contact Name"
                    type="text" 
                    name="name" />
                <input 
                    value={contact.email}
                    onChange={onChange}
                    placeholder="Contact Email"
                    type="text" 
                    name="email" />
                    <button onClick={handleClick}>Add</button>
            </div>

            {
                contactList.map((contactName) => (
                    <Contact key={contactName.name} name={contactName.name} email={contactName.email} handleRemove={handleRemove} />
                ))
            }
        </div>
    );
};

export default Contacts;