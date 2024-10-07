import React from 'react';
import './style/Footer.scss';

function Footer() {
  const year = new Date().getFullYear();
  const serverName = process.env.REACT_APP_SERVERNAME;
  return (
    <footer className='footer-content'>
      <p>© 2024-{year} {serverName}</p>
    </footer>
  );
}

export default Footer;
