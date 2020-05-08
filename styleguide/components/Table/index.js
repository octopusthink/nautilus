import React from 'react';
import PropTypes from 'prop-types';

export function Table({ columns, rows, getRowKey }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ caption }) => (
            <th key={caption}>{caption}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={getRowKey(row)}>
            {columns.map(({ render }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={index}>{render(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowKey: PropTypes.func.isRequired,
};

export default Table;
