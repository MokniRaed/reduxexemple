import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addContacts } from './Redux/gestSlice';

function Contacts() {
    const contacts = useSelector((state) => state.gest);
    console.log(contacts);
  const dispatch = useDispatch();

 const fetchUsers = async () => {
        try {
          const gests = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          dispatch(addContacts(gests.data));
    
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        fetchUsers();
      }, []);


  return (
    <div>
       {contacts.map((elt) => (
          <h2>{elt.name}</h2>
   ))}
    </div>
  )
}

export default Contacts
