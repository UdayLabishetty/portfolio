import './FormStyles.css';

import React from 'react';

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>E-Mail</label>
            <input type='email'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here!' />
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form;