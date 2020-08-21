import React from 'react'

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="https://github.com/silverbryan" target="_black">
        <i class="fab fa-github" style={{ color: 'white' }}></i>
        <h6 className="text-white" style={{ display: 'inline-block', padding: '0 10px' }}>Powered by: @silverbryan</h6>
      </a>
    </footer>
  );
}

export default Footer;