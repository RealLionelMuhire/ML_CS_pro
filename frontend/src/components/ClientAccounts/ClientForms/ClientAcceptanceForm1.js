import React, { useState } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import './ClientAcceptanceForm1.css';

function ClientAcceptanceForm1() {
  const [currentSection, setCurrentSection] = useState(1);

  // Define state and functions for form data as you did before

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
            {currentSection === 1 && <Section1 section1Data={section1Data} setSection1Data={setSection1Data} />}
            {currentSection === 2 && <Section2 section2Data={section2Data} setSection2Data={setSection2Data} />}
            {currentSection === 3 && <Section3 section3Data={section3Data} setSection3Data={setSection3Data} />}
            {currentSection === 4 && <Section4 section4Data={section4Data} setSection4Data={setSection4Data} />}
            <button onClick={handleNextSection}>Complete this section, Next section</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ClientAcceptanceForm1;
