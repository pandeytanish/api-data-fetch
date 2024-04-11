import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';

function Main() {
    const [data,setData] = useState([]);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
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
    
        data.map(posts =>
         <NavLink to={``}> <li key={posts.id}>{posts.userId}</li></NavLink>
        )
    }
  
  </ul>
  )
}

export default Main