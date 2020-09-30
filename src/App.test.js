import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

//format of the resp is not correct based on how the App useEffect was written
const server = setupServer(
  rest.get('https://restcountries.eu/rest/v2/all', (req, res, ctx) => {
    return res(ctx.json([
      {"name":"Afghanistan","topLevelDomain":[".af"],"alpha2Code":"AF","alpha3Code":"AFG","callingCodes":["93"],"capital":"Kabul","altSpellings":["AF","Afġānistān"],"region":"Asia","subregion":"Southern Asia","population":27657145,"latlng":[33.0,65.0],"demonym":"Afghan","area":652230.0,"gini":27.8,"timezones":["UTC+04:30"],"borders":["IRN","PAK","TKM","UZB","TJK","CHN"],"nativeName":"افغانستان","numericCode":"004","currencies":[{"code":"AFN","name":"Afghan afghani","symbol":"؋"}],"languages":[{"iso639_1":"ps","iso639_2":"pus","name":"Pashto","nativeName":"پښتو"},{"iso639_1":"uz","iso639_2":"uzb","name":"Uzbek","nativeName":"Oʻzbek"},{"iso639_1":"tk","iso639_2":"tuk","name":"Turkmen","nativeName":"Türkmen"}],"translations":{"de":"Afghanistan","es":"Afganistán","fr":"Afghanistan","ja":"アフガニスタン","it":"Afghanistan","br":"Afeganistão","pt":"Afeganistão","nl":"Afghanistan","hr":"Afganistan","fa":"افغانستان"},"flag":"https://restcountries.eu/data/afg.svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation","otherAcronyms":[],"otherNames":[]}],"cioc":"AFG"},
      {"name":"Åland Islands","topLevelDomain":[".ax"],"alpha2Code":"AX","alpha3Code":"ALA","callingCodes":["358"],"capital":"Mariehamn","altSpellings":["AX","Aaland","Aland","Ahvenanmaa"],"region":"Europe","subregion":"Northern Europe","population":28875,"latlng":[60.116667,19.9],"demonym":"Ålandish","area":1580.0,"gini":null,"timezones":["UTC+02:00"],"borders":[],"nativeName":"Åland","numericCode":"248","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"sv","iso639_2":"swe","name":"Swedish","nativeName":"svenska"}],"translations":{"de":"Åland","es":"Alandia","fr":"Åland","ja":"オーランド諸島","it":"Isole Aland","br":"Ilhas de Aland","pt":"Ilhas de Aland","nl":"Ålandeilanden","hr":"Ålandski otoci","fa":"جزایر الند"},"flag":"https://restcountries.eu/data/ala.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":""},
      {"name":"Albania","topLevelDomain":[".al"],"alpha2Code":"AL","alpha3Code":"ALB","callingCodes":["355"],"capital":"Tirana","altSpellings":["AL","Shqipëri","Shqipëria","Shqipnia"],"region":"Europe","subregion":"Southern Europe","population":2886026,"latlng":[41.0,20.0],"demonym":"Albanian","area":28748.0,"gini":34.5,"timezones":["UTC+01:00"],"borders":["MNE","GRC","MKD","KOS"],"nativeName":"Shqipëria","numericCode":"008","currencies":[{"code":"ALL","name":"Albanian lek","symbol":"L"}],"languages":[{"iso639_1":"sq","iso639_2":"sqi","name":"Albanian","nativeName":"Shqip"}],"translations":{"de":"Albanien","es":"Albania","fr":"Albanie","ja":"アルバニア","it":"Albania","br":"Albânia","pt":"Albânia","nl":"Albanië","hr":"Albanija","fa":"آلبانی"},"flag":"https://restcountries.eu/data/alb.svg","regionalBlocs":[{"acronym":"CEFTA","name":"Central European Free Trade Agreement","otherAcronyms":[],"otherNames":[]}],"cioc":"ALB"},
      {"name":"United States of America","topLevelDomain":[".us"],"alpha2Code":"US","alpha3Code":"USA","callingCodes":["1"],"capital":"Washington, D.C.","altSpellings":["US","USA","United States of America"],"region":"Americas","subregion":"Northern America","population":323947000,"latlng":[38.0,-97.0],"demonym":"American","area":9629091.0,"gini":48.0,"timezones":["UTC-12:00","UTC-11:00","UTC-10:00","UTC-09:00","UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:00","UTC+10:00","UTC+12:00"],"borders":["CAN","MEX"],"nativeName":"United States","numericCode":"840","currencies":[{"code":"USD","name":"United States dollar","symbol":"$"}],"languages":[{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],"translations":{"de":"Vereinigte Staaten von Amerika","es":"Estados Unidos","fr":"États-Unis","ja":"アメリカ合衆国","it":"Stati Uniti D'America","br":"Estados Unidos","pt":"Estados Unidos","nl":"Verenigde Staten","hr":"Sjedinjene Američke Države","fa":"ایالات متحده آمریکا"},"flag":"https://restcountries.eu/data/usa.svg","regionalBlocs":[{"acronym":"NAFTA","name":"North American Free Trade Agreement","otherAcronyms":[],"otherNames":["Tratado de Libre Comercio de América del Norte","Accord de Libre-échange Nord-Américain"]}],"cioc":"USA"}
    ]))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders footer text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/project is available here/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header with default light style', () => {
  render(<App />);
  const title = screen.getByText(/Where in the world/i);
  const titleDiv = title.parentElement;
  const header = titleDiv.parentElement;
  expect(header.className).toMatch(/light_background_primary/i);
  expect(header.className).toMatch(/light_typography_primary/i);
});

test('handles style button click by rendering header with dark style', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button'));
  const title = screen.getByText(/Where in the world/i);
  const titleDiv = title.parentElement;
  const header = titleDiv.parentElement;
  expect(header.className).toMatch(/dark_background_primary/i);
  expect(header.className).toMatch(/dark_typography_primary/i);
});

test('handles style button click by rendering header with dark style', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button'));
  fireEvent.click(screen.getByRole('button'));
  const title = screen.getByText(/Where in the world/i);
  const titleDiv = title.parentElement;
  const header = titleDiv.parentElement;
  expect(header.className).toMatch(/light_background_primary/i);
  expect(header.className).toMatch(/light_typography_primary/i);
});


//content loads from api request
test('content loads from rest api', async() => {
  render(<App />);

  expect(await screen.findByText(/United States of America/i)).toBeInTheDocument();
});

//region filter

//country name filter