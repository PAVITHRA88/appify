import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ headers, columns }) => {
  return (
    <table className="table table-striped">
      <TableHeader headers={headers} />
      <TableBody columns={columns} />
    </table >
  );
};

export default Table;
