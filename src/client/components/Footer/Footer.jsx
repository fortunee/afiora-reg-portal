import React from 'react';

function getCurrentYear () {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div className="footer-style text-center">
      <p>&copy;{getCurrentYear()}. Afiora Ltd.</p>
    </div>
  );
};

export default Footer;
