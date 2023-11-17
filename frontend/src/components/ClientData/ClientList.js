// src/components/ClientData/ClientList.js
import React, { useState, useEffect } from 'react';
import { getClients } from '../../../src/services/api';

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch the list of clients when the component mounts
    getClients()
      .then((response) => {
        setClients(response.data); // Assuming your API returns an array of clients
      })
      .catch((error) => {
        console.error('Error fetching clients:', error);
      });
  }, []);

  return (
    <div>
      <h2>Client List</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.fullName}</li>
          // Replace 'id' and 'fullName' with the actual fields returned by your API
        ))}
      </ul>
      <p>List</p>
    </div>
  );
}

export default ClientList;

