// import axios from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';
// import { JSDOM } from 'jsdom';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest-axe/extend-expect';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

global.window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));

jest.spyOn(global.console, 'error');
jest.spyOn(global.console, 'warn');
jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'info');
jest.spyOn(global.console, 'debug');

beforeEach(() => {
  global.console.error.mockClear();
  global.console.warn.mockClear();
  global.console.log.mockClear();
  global.console.info.mockClear();
  global.console.debug.mockClear();
});
