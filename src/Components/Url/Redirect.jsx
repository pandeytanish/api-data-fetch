import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Redirect() {
    const [data,setData]=useState([]);
const {id}=useParams();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((Response=>{
            setData(Response.data)
        }))
        .catch ((error)=>{
            console.log("Error for fetching",error)
        })
    },[id])

  return (
    <>
  <div>
  <p></p>
          <div className='w-full h-[400px] border border-red-500 rounded relative'>
                <h2 className='text-teal-300 text-4xl font-bold absolute bottom-18 bg-black left-16'>
                {data.id}
                {data.email}
                </h2>
                <h1>{data.title}</h1>
          </div>
   </div>
    </>
  )
}

export default Redirect