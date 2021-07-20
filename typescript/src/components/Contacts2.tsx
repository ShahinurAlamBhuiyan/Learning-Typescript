import React, { useState } from 'react';
import Contact from './Contact';

const Contacts2 = () => {
    const [contactList, setContactList] = useState<string[]>([]) 
    const [ contact, setContact ] = useState("");

    const handleClick = () => {
        setContactList([...contactList, contact]);
        setContact("");
    }
    const handleRemove = () => {
        
    }

    return (
        <div>
            <h1>Contact List</h1>
            <div>
                <input 
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact Name"
                    type="text" 
                    name="name" />
                    <button onClick={handleClick}>Add</button>
            </div>

            {
                contactList.map((contactName) => (
                    <Contact key={contactName} name={contactName} handleRemove={handleRemove} />
                ))
            }
        </div>
    );
};

export default Contacts2;