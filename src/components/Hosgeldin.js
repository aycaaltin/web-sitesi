import React from 'react'
import { useLocation } from 'react-router-dom';

function Hosgeldin() {
    const location = useLocation();
    const {username} = location.state;

  return (
    <div>
      <h2>Hoşgeldin {username}</h2>

    </div>
  )
}

export default Hosgeldin;
