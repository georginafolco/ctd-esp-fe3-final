import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  const [state, setState] = useState({
    success: false, 
    fail: false
  })

  // Auxiliar para validar email con regex
  const validateEmail = (email) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexCorreo.test(email)) {
      return true; // El correo es válido
    } else {
      return false; // El correo es inválido
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const userName = user.name.trim();

    if ( userName.length > 5 && validateEmail(user.email))  {
      setUser((prevUser) => ({...prevUser, name: userName}))
      setState({success: true, fail: false})
      console.log("nombre: " + userName + " email: " + user.email)
    } else {
      setState({success: false, fail: true})
    }
  }

  const handleChange = (e) => {
    setUser((prevUser) => ({...prevUser, [e.target.name]: e.target.value}))
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <button className='btn-send'>Send</button>
      </form>
      { state.success ? <p className='msg-success'>Gracias {user.name}, te contactaremos cuanto antes vía mail</p> : null }
      { state.fail ? <p className='msg-error'>Por favor verifique su información nuevamente</p> : null }
    </div>
  );
};

export default Form;
