import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('morning');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la reserva a tu backend
    // Por ejemplo, utilizando Axios para hacer una solicitud POST.
    console.log('Reserva enviada:', { name, date, time, guests });
  };

  return (
    <div id="Reservations" className="container">
      <h1>Reserva de Mesa</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="date">Fecha:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label htmlFor="time">Horario:</label>
        <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="morning">Mañana</option>
          <option value="afternoon">Tarde</option>
          <option value="night">Noche</option>
        </select>

        <label htmlFor="guests">Número de Invitados:</label>
        <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />

        <button type="submit">Hacer Reserva</button>
      </form>
    </div>
  );
};

export default ReservationForm;