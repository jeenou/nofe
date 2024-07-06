// PageFestival.js
import React from 'react';
import "./App.css"; // Import your global styles

const PageFestival = () => {
  return (
    <div className="content">
      <img
        src={`${process.env.PUBLIC_URL}/pictures/nofelogo.svg`}
        alt="Logo"
        className="logo"
      />
      <p className="big-text-red">
        <span className="big-text-red">Nousiaisten Festarit </span>
      </p>
      <div className="festival-info">
        <p>Nousiaisten Festarit järjestetään tänä vuonna Hämeenlinnassa, Aulangon suurella huvilalla 9.-11.8.2024. Festareille voi saapua perjantaina klo 17 alkaen ja poistuminen tapahtuu sunnuntaina viimeistään klo 12.</p>

        <p className="big-text-red">
        <span className="big-text-red">Liput</span>
        </p>
        <p>
        <strong>Pe-su:</strong> 50€<br />
        <strong>Pe-la:</strong> 30€ (yhden yön majoittuminen)<br />
        <strong>La-su:</strong> 25€ (yhden yön majoittuminen)<br />
        <strong>Käväsen vuan-lippu pe tai la:</strong> 20€ (ei majoittumista)<br />
        <strong>Sisänukkumapaikka (sänky tai patja):</strong> 5€
        <br /><br />
        <p><strong>VIP-LIPPU 60/hkl € (pe-su, sisältää majoituksen)</strong></p>
        <p>VIP-lipulla saat VIP-passin, jolla saat ohittaa minkä tahansa vessajonon, pääset erityiselle VIP-alueelle yleisössä sekä bäkkärille tapaamaan artisteja. Ostaessasi VIP-lipun kavereidesi kanssa pääset valitsemaan sisänukkumahuoneista mieleisesi jos sopivan kokoisia huoneita on vielä vapaana. Aamulla mimosa-tarjoilu suoraan sänkyyn, ja mystinen tarot-luenta vielä mystisempään aikaan kun sitä vähiten odotat. VIP-lipulla tuet toki myös järjestäjäosastoa &lt;3</p>

      </p>


        <img
        src={`${process.env.PUBLIC_URL}/pictures/dance.svg`}
        alt="Dance"
        className="dance-pic"
      />

        <p className="big-text-red">
        <span className="big-text-red">Majoitus</span>
        </p>
        <p>Huvilalla on yhteensä 50 sänkyä/patjaa, joista osa menee artistien käyttöön, mutta loppuja sisänukkumapaikkoja voi varata 5 euron hintaan. Sisänukkumapaikkoihin ei kuulu lakanat, joten ota omat lakanat mukaan. Festaripaikalla voi myös nukkua teltassa tai riippumatossa. Sisätiloissa ei voida taata täyttä hiljaisuutta nukkumiseen ennen aamuyötä, joten herkkäunisille teltta on luultavasti parempi vaihtoehto. Merkkaa ilmoittautumislomakkeeseen oma nukkumispreferenssisi niin varmistetaan, että nukkumapaikat ja riippumattopuut riittävät varmasti kaikille.</p>

        <p className="big-text-red">
        <span className="big-text-red">Kyydit</span>
        </p>
        <p>Festaripaikka sijaitsee 6,5 kilometrin päässä Hämeenlinnan rautatieasemasta. Festareille tulee kyytiexcel, johon voit ilmoittaa oman festareille suuntaavan autosi. Lisäksi pyritään hakemaan porukkaa Hämeenlinnan asemalta junilta sekä perjantaina että lauantaina. Samaan kyytiexceliin voit merkata junasi saapumisajan ja kyytitarpeen. Lisäksi ehdottomasti voi suositella pyöräilemistä rautatieasemalta huvilalle, sillä reitti on melekosen uppee! Kyytiexceliin voit merkata myös tarpeen pelkkien tavaroidesi kuskaamiseen festaripaikalle, jos pyöräily ilman tavaralastia houkuttelee.</p>

        <p className="big-text-red">
        <span className="big-text-red">Ruokailu</span>
        </p>
        <p>Paikalla on kattava keittiö ja kaksi grillipaikkaa. Lauantai- ja sunnuntaiaamuna on tarjolla aamupalaa, mutta nälkäisimpien ja pisimpään nukkuvien kannattaa varautua omilla ruoilla myös aamuihin. Keittiön varusteluja esim.</p>
        <ul>
          <li>Uuni ja liesi</li>
          <li>Kahvinkeitin</li>
          <li>Jääkaappi</li>
          <li>Pakastin</li>
          <li>Astioita ja aterimia</li>
          <li>Folio</li>
          <li>Kahvi, ketsuppi, sinappi, kahvikauramaito, voi, öljy, pippuri, suola, grillimauste</li>
          <li>Talouspaperia</li>
        </ul>
        <p>Aamupalan sisällöstä tiedotetaan lähempänä festareita.</p>
        <p className="middle-text-red">
        <span className="middle-text-red">
          On the last day of the festival,<br />
          Jesus stood and said in a loud voice
        </span>
      </p>
        <img
        src={`${process.env.PUBLIC_URL}/pictures/jesus.svg`}
        alt="Jeesus"
        className="dance-pic"
      />

        <p className="big-text-red">
        <span className="big-text-red">Juomat</span>
        </p>
        <p>Omat juomat mukaan, järkkääjä suattaapi tuoda jotain yllätyksiä paikan päälle.</p>

        <p className="big-text-red">
        <span className="big-text-red">Kylpy</span>
        </p>
        <p>Festaripaikka sijaitsee järven rannassa ja mestoilla on myös kaksi pegunlämmintä paljua, sekä kaksi saunaa. Festareilla on uimapukupakko paljussa ja järvessä, saunassa ja pesutiloissa alastomuus on lähtökohtaisesti ok, mutta kunnioitathan myös muiden festarivieraiden toiveita. Oma pyyhe mukaan ja saunatiloihin ei lasipulloja. Kaikki saunat ja paljut ovat sekavuoroja.</p>

        <p className="big-text-red">
        <span className="big-text-red">WC</span>
        </p>
        <p>Festaripaikalta löytyy sekä naisten, miesten että unisex-wc:t.</p>

        <p className="big-text-red">
        <span className="big-text-red">Kaikkien iloksi</span>
        </p>
        <p>Pidä festaripaikka siistinä, vie roskat heti roskiin ja pullot ja tölkit tölkkikasseihin. Älä tuhoa luontoa tai heitä tumppeja maahan. Pidä itsestä ja kaverista huolta, muista aurinkorasva ja riittävä nesteytys, mutta myös välivesi, jotta kaikilla on kivaa. Festaripaikan luovutus on sunnuntaina jo klo 12, ja toivotaan, että kaikki vieraat osallistuvat paikan siistinä pitämiseen ja sunnuntain siivoamiseen, niin saadaan paikat nopeasti pakettiin. Omat tavarat 11:00 mennessä ulos kasaan, jos nukut huvilan sisällä.</p>
      </div>
    </div>
  );
};

export default PageFestival;
