import React from 'react';

function Section2({ section2Data, setSection2Data }) {
  return (
    <div>
      <h3>SECTION II – Legal Person</h3>
      <p>Complete this section if the Shareholder is a legal entity.</p>
      <label>
        Name of Entity:
        <input
          type="text"
          value={section2Data.nameOfEntity}
          onChange={(e) => setSection2Data({ ...section2Data, nameOfEntity: e.target.value })}
        />
      </label>
      {/* Add more input fields for Section 2 */}
    </div>
  );
}

export default Section2;
