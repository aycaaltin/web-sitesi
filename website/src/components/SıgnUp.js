import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SıgnUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        meslek:'',
        password:''
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        console.log(formData);
        navigate('/hosgeldiniz',  { state: {username: formData.username}} );
    };

    const handleClick = () => {
    }
    
  return (
    <div className='arkaplan'>
        <h2>Üye Ol</h2>
        <form onSubmit={handleSubmit}>
            <div className="ınput"><input className="ınput2"type="text" name="username" placeholder="Kullanıcı Adı" value={formData.username} onChange={handleChange}/></div>   
            <div className='ınput'><input className='ınput2' type="text" name="email" placeholder="E-posta" value={formData.email} onChange={handleChange}/></div>  
            <div className='ınput'><input className='ınput2' type="text" name="meslek" placeholder="meslek" value={formData.meslek} onChange={handleChange}/></div>
            <div className='ınput'><input className='ınput2' type="password" name="password" placeholder="Şifre" value={formData.password} onChange={handleChange}/></div>   
            <button className='ınput3' type="submit" onClick={handleClick}>Üye Ol</button>
            
        </form>
      
    </div>
  )
}

export default SıgnUp;
