import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import MdContentCopy from 'react-icons/lib/md/content-copy';
import ToolbarButton from 'rsg-components/ToolbarButton';

export function PathlineRenderer({ classes, children }) {
  return null;
  return (
    <div>
      {children}
      <ToolbarButton
        small
        onClick={() => copy(children)}
        title="Copy to clipboard"
      >
        <MdContentCopy />
      </ToolbarButton>
    </div>
  );
}

PathlineRenderer.propTypes = {
  children: PropTypes.string,
};

export default PathlineRenderer;
