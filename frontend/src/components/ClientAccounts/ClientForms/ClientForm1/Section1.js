// Section1.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Section1({ section1Data, setSection1Data }) {
  const [countries, setCountries] = useState([]);
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    // Fetch the list of countries
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const countryList = response.data.map((country) => country.name.common);
        setCountries(countryList.sort());
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });

    // Fetch the list of nationalities (you can fetch it from your API)
    const nationalityList = ['Rwandan', 'Other', 'Your', 'Nationalities'].sort();
    setNationalities(nationalityList);
  }, []);

  const handleInputChange = (e) => {
    setSection1Data({
      ...section1Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleNationalityChange = (e) => {
    const nationality = e.target.value;
    setSection1Data((prevData) => ({
      ...prevData,
      nationality,
      idNumber: nationality === 'Rwandan' ? '' : prevData.idNumber,
      passportNumber: nationality === 'Rwandan' ? '' : prevData.passportNumber,
      passportExpiryDate: nationality === 'Rwandan' ? '' : prevData.passportExpiryDate,
    }));
  };

  return (
    <div>
      <h3>SECTION I – CLIENT DETAILS</h3>
      <p>Please fill in the blank fields in the form below. This information will help us serve you better.</p>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={section1Data.fullName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        TIN:
        <input
          type="text"
          name="tin"
          value={section1Data.tin}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Nationality:
        <select name="nationality" value={section1Data.nationality} onChange={handleNationalityChange}>
          <option value="">Select Nationality</option>
          {nationalities.map((nationality, index) => (
            <option key={index} value={nationality}>
              {nationality}
            </option>
          ))}
        </select>
      </label>
      {/* Rest of the form fields as before */}
    </div>
  );
}

export default Section1;
