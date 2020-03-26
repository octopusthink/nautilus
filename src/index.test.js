import fs from 'fs';
import path from 'path';

import React from 'react';

import { render } from '../utils/testing';

import * as NautilusExports from '.';

describe('Package entrypoint', () => {
  it('should export the Nautilus component', () => {
    const Nautilus = NautilusExports.default;

    expect(Nautilus).toBeDefined();

    const { container } = render(<Nautilus />);

    expect(container.firstChild).toBeNull();
  });

  describe('Component exports', () => {
    const componentFolders = fs.readdirSync('src/components/').filter((file) => {
      return fs.statSync(path.join('src/components/', file)).isDirectory();
    });

    const components = componentFolders
      .map((componentType) => {
        return fs.readdirSync(`src/components/${componentType}/`).filter((file) => {
          return fs.statSync(path.join('src/components/', componentType, file)).isDirectory();
        });
      })
      .reduce((acc, component) => acc.concat(component), []);

    it('exports components', () => {
      expect(components).not.toHaveLength(0);
    });

    components.forEach((component) => {
      it(`exports the <${component}> component`, () => {
        expect(NautilusExports[component]).toBeTruthy();
      });
    });
  });

  describe('Style helper exports', () => {
    const styleFiles = fs.readdirSync('src/styles/').filter((file) => {
      return fs.statSync(path.join('src/styles/', file)).isFile();
    });

    styleFiles.forEach((file) => {
      it(`exports helpers in src/styles/${file}`, () => {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        const helper = require(`src/styles/${file}`);

        Object.keys(helper).forEach((exportName) => {
          expect(NautilusExports[exportName]).toBeTruthy();
          expect(NautilusExports[exportName]).toEqual(helper[exportName]);
        });
      });
    });
  });

  describe('Theme exports', () => {
    const privateThemes = ['styleguide'];
    const themes = fs.readdirSync('src/themes/').filter((file) => {
      return fs.statSync(path.join('src/themes/', file)).isDirectory();
    });

    themes.forEach((themeName) => {
      // Don't check for themes we used internally and don't want to export.
      if (privateThemes.includes(themeName)) {
        it(`does not export private theme in src/themes/${themeName}`, () => {
          expect(NautilusExports.themes[themeName]).not.toBeDefined();
        });

        return;
      }

      it(`exports theme in src/themes/${themeName}`, () => {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        const theme = require(`src/themes/${themeName}/index.js`);

        expect(NautilusExports.themes[themeName]).toBeDefined();
        expect(NautilusExports.themes[themeName]).toEqual(theme.default);
      });
    });

    it('exports useTheme', () => {
      expect(NautilusExports.useTheme).toBeTruthy();
    });
  });
});
