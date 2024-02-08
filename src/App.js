import './App.css';
import React, { useState,useEffect } from 'react';
import Api from './Components/Api';


function App() {
  const [url,setUrl]=useState()
  const [data,setData]=useState()
  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(json => setData(json))
  },[data]
  )
  return (
    <>
    <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/users')}>Show Users</button>
    <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/posts')}>Show posts</button>
    {data && <Api data={data}/>}
    </>
  );
}

export default App;
