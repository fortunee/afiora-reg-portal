import React from 'react';

function getCurrentYear () {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div className="footer text-center">
      <p>&copy;{getCurrentYear()}. Afiaora Ltd.</p>
    </div>
  );
};

export default Footer;
