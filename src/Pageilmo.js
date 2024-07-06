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
          Ilmoittautuminen aukeaa<br /> ti 9.7. klo 18:00
        </p>
      </div>
      <p>Ilmoittautumislinkki julkistetaan tällä sivulla.</p>
    </div>
  );
};

export default PageIlmo;
