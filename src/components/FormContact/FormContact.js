import React, {useState} from 'react';


const FormContact = () => {

const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [message,setMessage] = useState('');



const changeInput = e => {

  e.preventDefault();
  console.log(name);

  // setName(e);
  // setEmail(e);
  // setMessage(e);
};


  return (
  
  <>

  <form>
  <div className="form-group" onSubmit = {changeInput}>
    <label htmlFor='Your name'>Your Name</label>
    <input type="text" id="name" name="name" value={name} onChange={ e => setName(e.target.value)}/>
    </div>

    <div className="form-group">
    <label htmlFor='Your email'>Your Email</label>
    <input type="text" id="email" name="email" value={email} onChange={ e => setEmail(e.target.value)}/>
    </div>

    <div className="form-group">
    <label htmlFor='message'>Message</label>
    <textarea type="text" id="message" name="message"  value={message} onChange={ e => setMessage(e.target.value)}/>
    </div>
    <button type="submit">send message</button>
  </form>

  </>
  
  
  );
}
export default FormContact;