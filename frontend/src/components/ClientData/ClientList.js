// src/components/ClientList.js

import React, { useState, useEffect } from 'react';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clients')  // Update with your backend URL
      .then(response => response.json())
      .then(data => setClients(data.clients))
      .catch(error => console.error('Error fetching clients:', error));
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;

