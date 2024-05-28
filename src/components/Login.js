import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username:'',
        password:''
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit =(e) => {
        console.log('data',data);
        navigate('/hosgeldin',  { state: {username: data.username}} );
    }
  return (
    <div className='arkaplan'>
      <h2>Giriş yap</h2>
      <form onSubmit={handleSubmit}>
       <div className='ınput'><input className='ınput2' type='text' name='username' placeholder='Kullanıcı Adı' value={setData.username} onChange={handleChange} required/></div>
       <div className='ınput'><input className='ınput2' type='text' name='password' placeholder='Şifre' value={setData.password} onChange={handleChange} required /></div>
       <button type='submit'>Giriş Yap</button>
        
      </form>
    </div>
  )
}

export default Login;
