import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Select() {
    const[selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        if (selectedValue === 'reader') {
            navigate('/login');
        }
  return (
    <div>
         <select className='selected'value={selectedOption} onChange={handleOptionChange}>
           <option value="yazar" >Yazar</option>
           <option value="okuyucu" >Okuyucu</option>

        </select>
      
    </div>
  );
};
}

export default Select;
