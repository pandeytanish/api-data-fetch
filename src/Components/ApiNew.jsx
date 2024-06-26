
import { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';

function ApiNew() {
    const [data,setData] = useState([]);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
          setData(response.data);
      })
      .catch(error => {
          console.error('Error Fetching data', error );
        });
    },[]);
  return (
    <ul>
    {
    
        data.map(person =>
       <NavLink to={`/IdRout/${person.id}`}>  <li key={person.id}>{person.email}</li> </NavLink> 
        )
    }
  </ul>
  )
}

export default ApiNew