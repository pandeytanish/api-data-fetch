import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const [more, setMore] = useState(5);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            });
    }, []);

    return (
        <>
            <div>
                {data.slice(0, 10).map((value, index) => (
                    <div key={index} >
                        <h2>
                            {value.id}
                        </h2>
                        <h1>{value.title}</h1>
                        <Link to={`/data/${value.id}`}>
                            <button className='w-[3rem] h-[6vh] border-2 border-red-900 bg-yellow-300 text-black font-bold ml-[7rem]'>
                                MORE
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Home;
