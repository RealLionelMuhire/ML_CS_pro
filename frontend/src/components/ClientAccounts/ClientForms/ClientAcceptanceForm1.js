import React, { useState } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import './ClientAcceptanceForm1.css';

function ClientAcceptanceForm1() {
  const [currentSection, setCurrentSection] = useState(1);

  const [section1Data, setSection1Data] = useState({
    fullName: '',
    taxResidency: '',
    TIN: '',
    citizenship: '',
    dateOfBirth: '',
    placeOfBirth: '',
    passportIdNumber: '',
    countryOfIssue: '',
    expiryDate: '',
    occupation: '',
    clientContact: '',
    preferredLanguage: '',
    designation: '',
    shareholding: '',
    introducer: '',
    contactPerson: '',
  });

  const [section2Data, setSection2Data] = useState({
    nameOfEntity: '',
    previousName: '',
    typeOfEntity: '',
    typeOfLicense: '',
    dateOfIncorporation: '',
    countryOfIncorporation: '',
    taxResidencies: '',
    registeredOfficeAddress: '',
    businessActivity: '',
    countryOfOperation: '',
    phoneNumber: '',
  });

  const [section3Data, setSection3Data] = useState({
    authorizedPersons: [
      {
        name: '',
        address: '',
        emailAddress: '',
        relationship: '',
        phoneNumber: '',
        specimenSignature: '',
      },
    ],
  });

  const [section4Data, setSection4Data] = useState({
    isPEP: false,
  });

  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  return (
    <div>
        <Header />
        <main>
            <div className="client-acceptance-form">
            <h2>Client Acceptance Form</h2>
            <form>
                {currentSection === 1 && (
                <div>
                    <h3>SECTION I – CLIENT DETAILS</h3>
                    <p>Please fill in the blank fields in the form below. This information will help us serve you better.</p>
                    {/* Add input fields for Section 1 */}
                </div>
                )}
                {currentSection === 2 && (
                <div>
                    <h3>SECTION II – Legal Person</h3>
                    <p>Complete this section if the Shareholder is a legal entity.</p>
                    {/* Add input fields for Section 2 */}
                </div>
                )}
                {currentSection === 3 && (
                <div>
                    <h3>SECTION III – Authorised Persons</h3>
                    <p>Authorised Persons to deal on behalf of the Legal Person.</p>
                    {/* Add input fields for Section 3 */}
                </div>
                )}
                {currentSection === 4 && (
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
                )}
                <button onClick={handleNextSection}>Complete this section, Next section</button>
            </form>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default ClientAcceptanceForm1;
