import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import './ClientRegistrationPage.css';

function ClientRegistrationPage() {
  return (
    <div className="registration-page">
      <Header />
      <main>
        <div className="container">
          <article className="client-registration">
            <div className="registration-form">
              <h2 className="logo">WELCOME TO ML CORPORATE SERVICES</h2>
              <form id="client_registration_form" action="/auth/sign_up" method="post">
                {/* Full Name */}
                <div className="field">
                  <label htmlFor="user_fullname">Full Name</label><br />
                  <input autoFocus type="text" name="user[fullname]" id="user_fullname" />
                </div>

                {/* Tax Residency */}
                <div className="field">
                  <label htmlFor="user_tax_residency">Tax Residency</label><br />
                  <input type="text" name="user[tax_residency]" id="user_tax_residency" />
                </div>

                {/* TIN */}
                <div className="field">
                  <label htmlFor="user_tin">TIN</label><br />
                  <input type="text" name="user[tin]" id="user_tin" />
                </div>

                {/* Citizenship */}
                <div className="field">
                  <label htmlFor="user_citizenship">Citizenship</label><br />
                  <input type="text" name="user[citizenship]" id="user_citizenship" />
                </div>

                {/* Date of Birth */}
                <div className="field">
                  <label htmlFor="user_date_of_birth">Date of Birth</label><br />
                  <input type="date" name="user[date_of_birth]" id="user_date_of_birth" />
                </div>

                {/* Place of Birth */}
                <div className="field">
                  <label htmlFor="user_place_of_birth">Place of Birth</label><br />
                  <input type="text" name="user[place_of_birth]" id="user_place_of_birth" />
                </div>

                {/* Passport/ID Number */}
                <div className="field">
                  <label htmlFor="user_passport_id">Passport/ID Number</label><br />
                  <input type="text" name="user[passport_id]" id="user_passport_id" />
                </div>

                {/* Country of Issue */}
                <div className="field">
                  <label htmlFor="user_country_of_issue">Country of Issue</label><br />
                  <input type="text" name="user[country_of_issue]" id="user_country_of_issue" />
                </div>

                {/* Expiry Date */}
                <div className="field">
                  <label htmlFor="user_expiry_date">Expiry Date</label><br />
                  <input type="date" name="user[expiry_date]" id="user_expiry_date" />
                </div>

                {/* Occupation */}
                <div className="field">
                  <label htmlFor="user_occupation">Occupation</label><br />
                  <input type="text" name="user[occupation]" id="user_occupation" />
                </div>

                {/* Client Contact - Email & Phone */}
                <div className="field">
                  <label htmlFor="user_contact_email">Client Contact - Email</label><br />
                  <input type="email" name="user[contact_email]" id="user_contact_email" />
                </div>

                <div className="field">
                  <label htmlFor="user_contact_phone">Client Contact - Phone</label><br />
                  <input type="tel" name="user[contact_phone]" id="user_contact_phone" />
                </div>

                {/* Preferred Language */}
                <div className="field">
                  <label htmlFor="user_preferred_language">Preferred Language</label><br />
                  <select name="user[preferred_language]" id="user_preferred_language">
                    <option value="english">English</option>
                    <option value="spanish">Swahili</option>
                    <option value="french">French</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="field checkbox-field">
                  <input type="checkbox" name="user[agree_terms]" id="user_agree_terms" />
                  <label htmlFor="user_agree_terms"><a href='#'>Agree with terms and conditions</a></label>
                </div>

                <div className="actions">
                  <input type="submit" name="commit" value="Register" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ClientRegistrationPage;
