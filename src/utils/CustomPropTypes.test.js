import React from 'react';
import shortid from 'shortid';

import { Heading, Paragraph } from 'components';
import { muteConsole, render } from 'utils/testing';

import CustomPropTypes from './CustomPropTypes';

describe('CustomPropTypes', () => {
  describe('allowedChildren', () => {
    let ParagraphParent;
    beforeEach(() => {
      ParagraphParent = (props) => {
        // eslint-disable-next-line react/prop-types
        const { children } = props;
        return <div>{children}</div>;
      };
      ParagraphParent.defaultProps = { children: undefined };
      // We have to create a unique `displayName` for every test to ensure the
      // console output for propType validation is output to the console for
      // every test. See:
      // https://github.com/facebook/react/issues/7047#issuecomment-228614964
      ParagraphParent.displayName = shortid.generate();
      ParagraphParent.propTypes = {
        children: CustomPropTypes.allowedChildren('p'),
      };

      muteConsole({ times: 1, type: 'error' });
    });

    it('should not error when children are empty', () => {
      render(<ParagraphParent />);

      expect(global.console.error).not.toHaveBeenCalled();
    });

    it('should error when children are of the wrong type', () => {
      render(
        <ParagraphParent>
          <span>hello</span>
        </ParagraphParent>,
      );

      expect(global.console.error.mock.calls[0][0]).toMatch(
        `Failed prop type: ${
          ParagraphParent.displayName
        } component only accepts the following components as children: p`,
      );
    });

    it('should not error when children are of the correct type', () => {
      render(
        <ParagraphParent>
          <p>hello</p>
        </ParagraphParent>,
      );

      expect(global.console.error).not.toHaveBeenCalled();
    });

    it('should allow React components as type', () => {
      ParagraphParent.propTypes = {
        children: CustomPropTypes.allowedChildren(Paragraph),
      };

      render(
        <ParagraphParent>
          <Paragraph>hello</Paragraph>
        </ParagraphParent>,
      );

      expect(global.console.error).not.toHaveBeenCalled();
    });

    it('should error if React component type does not match', () => {
      ParagraphParent.propTypes = {
        children: CustomPropTypes.allowedChildren(Paragraph),
      };

      render(
        <ParagraphParent>
          <Heading level={3}>hello</Heading>
        </ParagraphParent>,
      );

      expect(global.console.error.mock.calls[0][0]).toMatch(
        `Failed prop type: ${
          ParagraphParent.displayName
        } component only accepts the following components as children: ${
          Paragraph.displayName
        }`,
      );
    });

    it('should error when some children are of the wrong type', () => {
      render(
        <ParagraphParent>
          <p>hello</p>
          <span>goodbye</span>
        </ParagraphParent>,
      );

      expect(global.console.error.mock.calls[0][0]).toMatch(
        `Failed prop type: ${
          ParagraphParent.displayName
        } component only accepts the following components as children: p`,
      );
    });

    it('should error when children are not of any type', () => {
      render(<ParagraphParent>hello</ParagraphParent>);

      expect(global.console.error.mock.calls[0][0]).toMatch(
        `Failed prop type: ${
          ParagraphParent.displayName
        } component only accepts the following components as children: p`,
      );
    });

    it('should allow multiple types for children', () => {
      ParagraphParent.propTypes = {
        children: CustomPropTypes.allowedChildren('p', 'div'),
      };
      render(
        <ParagraphParent>
          <p>hello</p>
          <div>goodbye</div>
        </ParagraphParent>,
      );

      expect(global.console.error).not.toHaveBeenCalled();
    });

    it('should error on either of multiple types for children', () => {
      ParagraphParent.propTypes = {
        children: CustomPropTypes.allowedChildren('p', 'div'),
      };
      render(
        <ParagraphParent>
          <p>hello</p>
          <span>goodbye</span>
        </ParagraphParent>,
      );

      expect(global.console.error.mock.calls[0][0]).toMatch(
        `Failed prop type: ${
          ParagraphParent.displayName
        } component only accepts the following components as children: p`,
      );
    });

    it('should not error when multiple children are of the correct type', () => {
      render(
        <ParagraphParent>
          <p>hello</p>
          <p>goodbye</p>
        </ParagraphParent>,
      );

      expect(global.console.error).not.toHaveBeenCalled();
    });
  });
});
