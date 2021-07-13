import { DataGrid, GridToolbar } from '@material-ui/data-grid';

export default function DataTable(props) {
  return (
      <DataGrid 
        components={{
          //Toolbar: GridToolbar,
        }}
        {...props} 
      />
  )
}