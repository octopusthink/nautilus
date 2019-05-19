// import axios from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';
// import { JSDOM } from 'jsdom';

// Required for react-slick.
global.window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});
