import React from 'react';

const TableBody = ({ columns }) => {
  return <tbody>
    {
      columns && columns.map((word, index) => <tr key={index}><td>{word.word}</td><td>{word.score}</td></tr>)
    }
  </tbody>;
}

export default TableBody;