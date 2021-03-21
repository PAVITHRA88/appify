import React from 'react';

const TableHeader = ({headers}) => {
  return <thead>
  <tr>
    {
      headers.map((header, id) => <th key={id}>{header}</th>)
    }
  </tr>
</thead>;
}

export default TableHeader;