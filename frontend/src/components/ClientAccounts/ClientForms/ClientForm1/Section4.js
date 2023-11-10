import React from 'react';

function Section4({ section4Data, setSection4Data }) {
  return (
    <div>
      <h3>SECTION IV – PEP Status</h3>
      <p>Is the Ultimate Beneficial Owner/Shareholder a Politically Exposed Person (PEP)?</p>
      <label>
        <input
          type="radio"
          name="isPEP"
          value="yes"
          checked={section4Data.isPEP}
          onChange={() => setSection4Data({ ...section4Data, isPEP: true })}
        />{' '}
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="isPEP"
          value="no"
          checked={!section4Data.isPEP}
          onChange={() => setSection4Data({ ...section4Data, isPEP: false })}
        />{' '}
        No
      </label>
      {section4Data.isPEP && (
        <div>
          {/* Add additional fields if PEP status is "Yes" */}
        </div>
      )}
    </div>
  );
}

export default Section4;
