import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import 'react-data-table-component-extensions/dist/index.css';
import { columns, data } from './Data.js';



function App() {
  const tableData = {
    columns,
    data,
  };

  return (
    <DataTableExtensions
      {...tableData}
    >
      <DataTable
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
      />
    </DataTableExtensions>
  );
}

export default App;
