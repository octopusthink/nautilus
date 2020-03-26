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
    const componentFolders = fs.readdirSync(path.join(__dirname, 'components')).filter((file) => {
      return fs.statSync(path.join(__dirname, 'components', file)).isDirectory();
    });

    const components = componentFolders
      .map((componentType) => {
        return fs.readdirSync(path.join(__dirname, 'components', componentType)).filter((file) => {
          return fs.statSync(path.join(__dirname, 'components', componentType, file)).isDirectory();
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
    const styleFiles = fs.readdirSync(path.join(__dirname, 'styles')).filter((file) => {
      return fs.statSync(path.join(__dirname, 'styles', file)).isFile();
    });

    styleFiles.forEach((file) => {
      it(`exports helpers in ./styles/${file}`, () => {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        const helper = require(`./styles/${file}`);

        Object.keys(helper).forEach((exportName) => {
          expect(NautilusExports[exportName]).toBeTruthy();
          expect(NautilusExports[exportName]).toEqual(helper[exportName]);
        });
      });
    });
  });

  describe('Theme exports', () => {
    const privateThemes = ['styleguide'];
    const themes = fs.readdirSync(path.join(__dirname, 'themes')).filter((file) => {
      return fs.statSync(path.join(__dirname, 'themes', file)).isDirectory();
    });

    themes.forEach((themeName) => {
      // Don't check for themes we used internally and don't want to export.
      if (privateThemes.includes(themeName)) {
        it(`does not export private theme in src/themes/${themeName}`, () => {
          expect(NautilusExports.themes[themeName]).not.toBeDefined();
        });

        return;
      }

      it(`exports theme in ./themes/${themeName}`, () => {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        const theme = require(`./themes/${themeName}/index.js`);

        expect(NautilusExports.themes[themeName]).toBeDefined();
        expect(NautilusExports.themes[themeName]).toEqual(theme.default);
      });
    });

    it('exports useTheme', () => {
      expect(NautilusExports.useTheme).toBeTruthy();
    });
  });
});
