
import { useEffect, useState } from 'react';
import axios from "axios";

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
          <li key={person.id}>{person.email}</li>
        )
    }
  </ul>
  )
}

export default ApiNew