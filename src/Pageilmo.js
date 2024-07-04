// PageIlmo.js
import React from 'react';

const PageIlmo = () => {
  return (
    <div className="content">
      <img
        src={`${process.env.PUBLIC_URL}/pictures/nofelogo.svg`}
        alt="Logo"
        className="logo"
      />
      <div className="content-block text-container">
        <p className="big-text-white">
          Ilmoittautuminen aukeaa<br /> su 7.7. klo 7:07 pm
        </p>
      </div>
    </div>
  );
};

export default PageIlmo;
