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

// Jest is noisy when we want to test `invariant` code paths, so we just
// mock out the console in tests anyway.
jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn());
jest.spyOn(global.console, 'warn').mockImplementation(() => jest.fn());
jest.spyOn(global.console, 'log').mockImplementation(() => jest.fn());
jest.spyOn(global.console, 'info').mockImplementation(() => jest.fn());
jest.spyOn(global.console, 'debug').mockImplementation(() => jest.fn());
