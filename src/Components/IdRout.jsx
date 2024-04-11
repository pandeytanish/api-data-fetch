import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function IdRout() {
    const [event,setEvent] = useState({}) ;
    const {id} = useParams() ;

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            setEvent(response.data);
        })
        .catch(error => {
            console.error('Error Fetching data', error );
          });
      },[id]);
  return (
    <div>
   <p>{event.userId}</p>
   <p>{event.title}</p>
   <p>{event.body}</p>
   {/* <button onClick={showMore} className='w-[15rem] h-[6vh] bg-yellow-300 text-black font-bold'>
                Get more Movie
            </button>
            const showMore = () => {
        setMore(more + 1);
    }; */}
    </div>
  )
}

export default IdRout