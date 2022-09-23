import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api'; // ADD THIS
import { useGetData } from '../../custom-hooks'; // ADD THIS
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@mui/material'; // ADD THESE
import { BookForm } from '../../components/BookForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, minWidth: 130 },
  {
      field: 'name',
      headerName: 'Drone',
      width: 150,
      editable: true,
  },
  {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: true,
  },
  {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
  },
  {
      field: 'camera_quality',
      headerName: 'Camera',
      description: 'This column has a value getter and is not sortable.',
      width: 90
  },
  {
      field: 'max_speed',
      headerName: 'Speed',
      description: 'This column has a value getter and is not sortable.',
      width: 90
  },
  {
      field: 'dimensions',
      headerName: 'Dimensions',
      description: 'This column has a value getter and is not sortable.',
      width: 90
  },
  {
      field: 'weight',
      headerName: 'Weight',
      description: 'This column has a value getter and is not sortable.',
      width: 90
  },
  {
      field: 'flight_time',
      headerName: 'Flight Time',
      description: 'This column has a value getter and is not sortable.',
      width: 90
  },
  {
      field: 'cost_of_production',
      headerName: 'Cost',
      description: 'This column has a value getter and is not sortable.',
      width: 90
  },
  {
      field: 'series',
      headerName: 'Series',
      description: 'This column has a value getter and is not sortable.',
      width: 90
  },
]
  
// const rows = [
//     { id: 1, author: 'Tamsyn Muir', title: 'Gideon the Ninth', genre: ['science-fiction','fantasy'], pageNumbers: 448 },
//     { id: 2, author: 'Tracy Deonn', title: 'Legendborn', genre: ['YA', 'fantasy'], pageNumbers: 501 },
//     { id: 3, author: 'S.A. Chakraborty', title: 'City of Brass', genre: ['fantasy'], pageNumbers: 532 },
//     { id: 4, author: 'Maggie Stiefvater', title: 'The Raven Boys', genre: ['YA', 'fantasy'], pageNumbers: 416},
//     { id: 5, author: 'Sarah J Maas', title: 'Crescent City', genre: ['fantasy'], pageNumbers: 816},
//     { id: 6, author: 'Leigh Bardugo', title: 'Ninth House', genre: ['fantasy', 'paranormal'], pageNumbers: 458},
//     { id: 7, author: 'CL Clark', title: 'The Unbroken', genre: ['fantasy'], pageNumbers: 544 },
//     { id: 8, author: 'Elizabeth Lim', title: 'Six Crimson Cranes', genre: ['fantasy'], pageNumbers: 480},
//     { id: 9, author: 'Samantha Shannon', title: 'Priory of the Orange Tree', genre: ['fantasy'], pageNumbers: 848},
//   ];

interface gridData {
  data:{
    id?:string
  }
}

export const DataTable =  () => {
  
  let { droneData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    serverCalls.delete(`${gridData[0]}`)
    getData()
  }

  console.log(gridData) // a list of id's from checked rows

    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Drones In Inventory</h2>
          <DataGrid 
						rows={droneData} 
						columns={columns} 
						pageSize={5} 
						checkboxSelection 
						onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
						{...droneData}  
					/>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Drone</DialogTitle>
          <DialogContent>
            <DialogContentText>Drone id: {gridData[0]}</DialogContentText>
              <BookForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
      );
}
