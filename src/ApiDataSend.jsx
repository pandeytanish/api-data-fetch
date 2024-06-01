import axios from 'axios';
import React from 'react'

function ApiDataSend() {

    const formSubmit = (event) => {
  event.preventDefault();
  const guest_name = event.target.guest_name.value; 
  const phone_number = event.target.phone_number.value;
  const address = event.target.address.value;

  axios.post("https://31eb-2405-201-300e-7204-409b-811d-8359-c202.ngrok-free.app/check_ins" , {
    guest_name,
    phone_number,
    address,
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
    }
  return (
   <>
   <form onSubmit={formSubmit}>
    <input placeholder='name' type="text" name='guest_name' />
    <input placeholder='Phone Number' type="text" name='phone_number' />
    <input placeholder='Address' type="text" name='address' />
    <button type='submit'>Submit</button>
   </form>

   </>
  )
}

export default ApiDataSend