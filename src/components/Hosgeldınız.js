import React from 'react'
import { useLocation } from 'react-router-dom';

function Hosgeldınız() {
    const location = useLocation();
    const {username} = location.state;

  return (
    <div>
      <h3>Hoşgeldin {username} </h3>
      <p>Üyelik başarıyla tamamlandı!</p>
    </div>
  )
}

export default Hosgeldınız;

