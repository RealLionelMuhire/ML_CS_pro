import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../Common/Header';
import Footer from '../../../Common/Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import './ClientAcceptanceForm1.css';

function ClientAcceptanceForm1() {
  const [countries, setCountries] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    // Fetch the list of countries
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const countryList = response.data.map((country) => country.name.common);
        setCountries(countryList);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });

    // Define a list of nationalities (you can fetch it similarly from an API)
    const nationalityList = ['Rwandan', 'Other', 'Your', 'Nationalities'];
    setNationalities(nationalityList);
  }, []);

  // Define state for form data
  const [formData, setFormData] = useState({
    section1: {
      fullName: '',
      TIN: '',
      citizenship: '',
      // Add more fields for Section 1
    },
    section2: {
      nameOfEntity: '',
      previousName: '',
      typeOfEntity: '',
      typeOfLicense: '',
      dateOfIncorporation: '',
      // Add more fields for Section 2
    },
    section3: {
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
      // Add more fields for Section 3
    },
    section4: {
      isPEP: false,
      // Add more fields for Section 4
    },
  });

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="client-acceptance-form">
          <h2>Client Acceptance Form</h2>
          <form>
            {currentSection === 1 && (
              <Section1
                section1Data={formData.section1}
                setSection1Data={(data) =>
                  setFormData({ ...formData, section1: data })
                }
                countries={countries}
              />
            )}
            {currentSection === 2 && (
              <Section2
                section2Data={formData.section2}
                setSection2Data={(data) =>
                  setFormData({ ...formData, section2: data })
                }
              />
            )}
            {currentSection === 3 && (
              <Section3
                section3Data={formData.section3}
                setSection3Data={(data) =>
                  setFormData({ ...formData, section3: data })
                }
              />
            )}
            {currentSection === 4 && (
              <Section4
                section4Data={formData.section4}
                setSection4Data={(data) =>
                  setFormData({ ...formData, section4: data })
                }
              />
            )}
            <div>
              <button
                onClick={() =>
                  handleSectionChange(
                    currentSection > 1 ? currentSection - 1 : 1
                  )
                }
              >
                Previous Section
              </button>
              <button
                onClick={() =>
                  handleSectionChange(
                    currentSection < 4 ? currentSection + 1 : 4
                  )
                }
              >
                {currentSection < 4
                  ? 'Complete this section, Next section'
                  : 'Submit Form'}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ClientAcceptanceForm1;
