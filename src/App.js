import './App.css';
import { BrowserRouter as Router, Route, Routes,Link, Navigate } from 'react-router-dom';
import SıgnUp from './components/SıgnUp';
import Hosgeldınız from './components/Hosgeldınız';
import Login from './components/Login';
import Hosgeldin from './components/Hosgeldin';
import { useState } from 'react';
import YazarComponent from './components/YazarComponent';
import OkuyucuComponent from './components/OkuyucuComponent';

function App() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
       window.location.href = `/login/${value}`;

       if (selectedValue === 'yazar') {
        Navigate('/login');
       } else if (selectedValue === 'okuyucu') {
        Navigate('/login');
       }


  };

   
  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route exact path="/" Component={SıgnUp}/>
        <Route exact path="/hosgeldiniz" Component={Hosgeldınız}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/hosgeldin" Component={Hosgeldin}/>
        </Routes>
      </div>
    
    </Router>
    
    
  );

}

export default App;
