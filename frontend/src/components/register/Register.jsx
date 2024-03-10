import React, { useState } from 'react';
import './Register.css';
import { postApiData } from '../../apis/callApi';

export function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coordinateX: 0,
    coordinateY: 0
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const formatPhoneNumber = (value) => {
    let formattedNumber = "";
    const regex = value.replace(/\D/g, ""); // Remove non-numeric characters
  
    if (regex.length >= 2) {
      formattedNumber = `+${regex.substring(0, 2)} `; // Country code
      if (regex.length >= 3) {
        formattedNumber += `(${regex.substring(2, 4)}) `; // Area code
        if (regex.length >= 7) {
          formattedNumber += `${regex.substring(4, 5)} ${regex.substring(5, 9)}`; // First part of number
          if (regex.length >= 13) {
            formattedNumber += `-${regex.substring(9)}`; // Second part of number
          } else {
            formattedNumber += `-${regex.substring(9)}`; // Second part of number
          }
        } else {
          formattedNumber += regex.substring(4); // Remaining digits
        }
      } else {
        formattedNumber += regex.substring(2); // Remaining digits
      }
    } else {
      formattedNumber = regex; // Only one or no digit entered
    }
  
    return formattedNumber;
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.coordinateX || !formData.coordinateY)
    {
      setError('Por favor, preencha todos os campos');
      return;
    }
    try
    {
      await postApiData('client', formData);
      window.location.reload();
    }
    catch (error)
    {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <section className="register section" id="Register">
      <h1>Cadastro de clientes</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className='inputDiv'>
            <label htmlFor="name">Nome: <span className='required'>*</span></label>
            <input
              placeholder='Nome do cliente'
              className='input'
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='inputDiv'>
            <label htmlFor="email">Email: <span className='required'>*</span></label>
            <input
              placeholder='email@dominio.com'
              className='input'
              type="text"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='inputDiv'>
            <label htmlFor="phone">Telefone: <span className='required'>*</span></label>
            <input
              placeholder='+55 (11) 9 1234-5678'
              maxLength={20}
              className='input'
              type="text"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='inputDiv'>
            <label htmlFor="coordinateX">Coordenada X: <span className='required'>*</span></label>
            <input
              placeholder='0'
              className='input'
              type="number"
              id="coordinateX"
              name="coordinateX"
              required
              value={formData.coordinateX}
              onChange={handleChange}
            />
          </div>
          <div className='inputDiv'>
            <label htmlFor="coordinateY">Coordenada Y: <span className='required'>*</span></label>
            <input
              placeholder='0'
              className='input'
              type="number"
              id="coordinateY"
              name="coordinateY"
              required
              value={formData.coordinateY}
              onChange={handleChange}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button className='buttonSubmit' type="submit">Cadastrar cliente</button>
        </form>
      </div>
    </section>
  );
}
