import React from 'react';

function Footer() {
  return (
    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="https://mlcorporateservices.com/" target="_blank" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="https://jovian.ai/learn" target="_blank" class="nav-link px-2 text-body-secondary">Book video Call Appointemnet</a></li>
      <li class="nav-item"><a href="https://jovian.ai/events" target="_blank" class="nav-link px-2 text-body-secondary">Events</a></li>
      <li class="nav-item"><a href="https://mlcorporateservices.com/" target="_blank" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">&copy; {new Date().getFullYear()} ML_Careeres, Inc</p>
  </footer>
  );
}
export default Footer;
