import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function SıgnUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        meslek:'',
        password:''
    });
    const meslekSecenekleri = ['Mühendis', 'Doktor', 'Öğretmen','Avukat','Yazılımcı','Diğer'];
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
        navigate('/login', {Login})
    }
    
  return (
    <div className='arkaplan'>
        <h2>Üye Ol</h2>
        <form onSubmit={handleSubmit}>
            <div className="ınput"><input className="ınput2"type="text" name="username" placeholder="Kullanıcı Adı" value={formData.username} onChange={handleChange} required/></div>   
            <div className='ınput'><input className='ınput2' type="text" name="email" placeholder="E-posta" value={formData.email} onChange={handleChange} required/></div>  
            <div className='ınput'> <select className='ınput4' id='meslek' name='meslek' value={formData.meslek} onChange={handleChange} required>
              <option value="" style={{color:'black', fontWeight:'bold'}}>Meslek seçin</option>
              {meslekSecenekleri.map((meslek, index)=>(
                <option key={index} value={meslek}>{meslek}</option>
              ))}
            </select></div>
            <div className='ınput'><input className='ınput2' type="password" name="password" placeholder="Şifre" value={formData.password} onChange={handleChange} required/></div> 
            <button className='ınput3' type="submit">Üye Ol</button>
           <div><button className='ınput3' type='submit' onClick={handleClick}>Giriş yap</button></div>
           <div>
       
       
      </div>
            
        </form>
      
    </div>
  )
}

export default SıgnUp;
