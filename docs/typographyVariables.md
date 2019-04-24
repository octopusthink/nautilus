Located at: [/src/base/typography/typographyVariables.js](https://github.com/wearethescenery/ether-system-react/blob/master/src/base/color/typographyVariables.js)


Naming here is important?

base colours + brand colours?
colour library + colour tokens?
library tokens + brand tokens?
foundation tokens + theme tokens?

foundation + brand variables/tokens


(read more about design tokens first!)

base, brand, belts-and-braces

foundation, studs/rebar/walls, trim/paint/shingles

core, components/flesh, skin (like an apple)

rename files and code to match

building code is helpful—because the code needs to match the mental model and structure (and structure in Sketch) in order for the system to work on both ends



```js noeditor
const { VariableTable } = require('../styleguide-ui/VariableTable');

const colors = require('../src/base/color/colors');
const colorVariables = require('../src/base/color/colorVariables');

<VariableTable baseVariables={colors} brandVariables={colorVariables} />
```


```js noeditor
const { VariableTable } = require('../styleguide-ui/VariableTable');

const fonts = require('../src/base/typography/fonts');
const typographyVariables = require('../src/base/typography/typographyVariables');

<VariableTable baseVariables={fonts} brandVariables={typographyVariables} />
```


```css
PageTitle {
  font-family: HarrietDisplay;
  font-size: 64px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #000000;
}

.HeadingLarge {
  font-family: HarrietDisplay;
  font-size: 51px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #000000;
}

.HeadingMedium {
  font-family: HarrietDisplay;
  font-size: 41px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.61;
  letter-spacing: normal;
  color: #000000;
}

.HeadingSmall {
  font-family: HarrietDisplay;
  font-size: 33px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.12;
  letter-spacing: normal;
  color: #000000;
}

.BodyLarge {
  font-family: HarrietText;
  font-size: 32.2px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #000000;
}

.InterfaceLarge {
  font-family: SFUIText;
  font-size: 32.2px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.05;
  letter-spacing: normal;
  color: #000000;
}

.Subheading {
  font-family: HarrietText;
  font-size: 26px;
  font-weight: 300;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.04;
  letter-spacing: normal;
  color: #000000;
}

.InterfaceMedium {
  font-family: SFUIText;
  font-size: 24.8px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.67;
  letter-spacing: normal;
  color: #000000;
}

.BodyMedium {
  font-family: HarrietText;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #000000;
}

.InterfaceSmall {
  font-family: SFUIText;
  font-size: 17px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  letter-spacing: 0.5px;
  color: #000000;
}

.BodySmall {
  font-family: HarrietText;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.69;
  letter-spacing: normal;
  color: #000000;
}

.MetadataSmall {
  font-family: SFUIText;
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.8;
  letter-spacing: 0.4px;
  color: #000000;
}
````



