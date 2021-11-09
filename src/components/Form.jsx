// Controlled Form
import './Form.css'
import React,  {useState} from 'react';

export function validate(input){
  let errors = {};
  if(!input.username){
    errors.username = 'Username is required';
  }else if (!/\S+@\S+\.\S+/.test(input.username)){
    errors.username = 'Username is invalid'
  }
  if(!input.password){
    errors.password = 'Password is required';
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password='Password is invalid'
  }
  return errors;
}

export default function  Form() {
  const [input, setInput] = useState({ //Empiezo a definir los estados y sus respectivos metodos de mi componente Form.
    username: '', 
    password: '',
  }); 
  const [error, setError] = useState({})

  const handleInputChange = function(e){
    setInput({
      ...input, //spread operator
      [e.target.name]: e.target.value,
    });
    setError(validate({
      ...input,
      [e.target.name]:e.target.value,
    }))
  }

  return (
      <div className="superDiv">
        <form className='form' >
            <div className="controlledForm">Controlled Form</div>
            <div className='formDiv'>
            <label htmlFor="">Username:</label>
            <input 
             className={error.username && 'danger'}
             name='username'
             value={input.username}
             type="text"
             placeholder="Your username..."
             onChange={(e)=>handleInputChange(e)}
             />
             {error.username && <p className="danger">{error.username}</p> }
            </div>
            
            <div className='formDiv'>
            <label htmlFor="">Password:</label>
            <input 
             className={error.password && 'danger'}
             name='password'
             value={input.password}
             type="password" 
             placeholder="Your password..."
             onChange={(e)=> handleInputChange(e)}
             />
             {error.password && <p className="danger">{error.password}</p> }
            </div>

            <input className="submit" type="submit" value="Enviar"/>
        </form>
      </div>
  )
}

