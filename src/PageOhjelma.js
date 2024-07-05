// PageOhjelma.js
import React from 'react';
import "./App.css"; // Import your global styles

const PageOhjelma = () => {
  return (
    <div className="content">
      <img
        src={`${process.env.PUBLIC_URL}/pictures/nofelogo.svg`}
        alt="Logo"
        className="logo"
      />
      <div className="content-block text-container">
        <p className="day-text-white">
          <span>Perjantai</span>
        </p>
        <p className="big-text-red">
        <span className="big-text-red">Limu Blues Boys & Girls</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/pe-artisti1.svg`}
          alt="Perjantai Artist 1"
          className="home-pic"
        />
        <p className="big-text-red">
        <span className="big-text-red">Los Horos</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/pe-artisti2.svg`}
          alt="Perjantai Artist 2"
          className="home-pic"
        />
        <p className="big-text-red">
        <span className="big-text-red">YMPYR</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/pe-artisti3.svg`}
          alt="Perjantai Artist 3"
          className="home-pic"
        />
        <p className="big-text-red">
        <span className="big-text-red">AONB feat Häsä88</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/pe-artisti4.svg`}
          alt="Perjantai Artist 4"
          className="home-pic"
        />
        <p className="big-text-red">
        <span className="big-text-red">Wanha Harppu</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/pe-artisti5.svg`}
          alt="Perjantai Artist 5"
          className="home-pic"
        />
        <p className="day-text-white">
          <span>Lauantai</span>
        </p>
        <p className="big-text-red">
        <span className="big-text-red">Nuna</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/la-artisti1.svg`}
          alt="Lauantai Artist 1"
          className="home-pic"
        />
        <p className="big-text-red">
        <span className="big-text-red">äM</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/la-artisti2.svg`}
          alt="Lauantai Artist 2"
          className="home-pic"
        />
        <p className="big-text-red">
        <span className="big-text-red">The Hepolampi Music Group</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/la-artisti3.svg`}
          alt="Lauantai Artist 3"
          className="home-pic"
        />
        <p className="big-text-red">
        <span className="big-text-red">Sodamens Union</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/la-artisti5.svg`}
          alt="Lauantai Artist 4"
          className="home-pic"
        />
        <p className="big-text-red">
        <span className="big-text-red">Closed Stage</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/closedstage.svg`}
          alt="Perjantai Artist 6"
          className="home-pic"
        />
        <p className="day-text-white">
          <span>Oheisohjelma</span>
        </p>
        <p>
        <div class="center-text">
        <p><strong>Julkaistaan myöhemmin.</strong></p>
        </div>
        </p>
      </div>
    </div>
  );
};

export default PageOhjelma;
