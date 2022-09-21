import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'author',
      headerName: 'Author',
      width: 200,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 250,
      editable: true,
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 200,
      editable: true,
    },
    {
      field: 'pageNumbers',
      headerName: 'Pages',
      type: 'number',
      width: 200,
      editable: true,
    },
  ];
  
const rows = [
    { id: 1, author: 'Tamsyn Muir', title: 'Gideon the Ninth', genre: ['science-fiction','fantasy'], pageNumbers: 448 },
    { id: 2, author: 'Tracy Deonn', title: 'Legendborn', genre: ['YA', 'fantasy'], pageNumbers: 501 },
    { id: 3, author: 'S.A. Chakraborty', title: 'City of Brass', genre: ['fantasy'], pageNumbers: 532 },
    { id: 4, author: 'Maggie Stiefvater', title: 'The Raven Boys', genre: ['YA', 'fantasy'], pageNumbers: 416},
    { id: 5, author: 'Sarah J Maas', title: 'Crescent City', genre: ['fantasy'], pageNumbers: 816},
    { id: 6, author: 'Leigh Bardugo', title: 'Ninth House', genre: ['fantasy', 'paranormal'], pageNumbers: 458},
    { id: 7, author: 'CL Clark', title: 'The Unbroken', genre: ['fantasy'], pageNumbers: 544 },
    { id: 8, author: 'Elizabeth Lim', title: 'Six Crimson Cranes', genre: ['fantasy'], pageNumbers: 480},
    { id: 9, author: 'Samantha Shannon', title: 'Priory of the Orange Tree', genre: ['fantasy'], pageNumbers: 848},
  ];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }} >
            <h2>Books in Our Catalog</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}