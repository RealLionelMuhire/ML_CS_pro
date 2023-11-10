import React from 'react';

function Section3({ section3Data, setSection3Data }) {
  return (
    <div>
      <h3>SECTION III – Authorised Persons</h3>
      <p>Authorised Persons to deal on behalf of the Legal Person.</p>
      {section3Data.authorizedPersons.map((person, index) => (
        <div key={index}>
          <label>
            Name:
            <input
              type="text"
              value={person.name}
              onChange={(e) =>
                setSection3Data({
                  ...section3Data,
                  authorizedPersons: section3Data.authorizedPersons.map((item, i) =>
                    i === index ? { ...item, name: e.target.value } : item
                  ),
                })
              }
            />
          </label>
          {/* Add more input fields for Section 3 */}
        </div>
      ))}
    </div>
  );
}

export default Section3;
