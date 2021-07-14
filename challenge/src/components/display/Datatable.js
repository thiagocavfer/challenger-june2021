/* 
* Componente DataGrid da biblioteca Material-UI
* https://github.com/mui-org/material-ui-x
* Instalação: npm install @material-ui/data-grid ou yarn add @material-ui/data-grid
*/

import { DataGrid } from '@material-ui/data-grid';

export default function DataTable(props) {
  return (
      <DataGrid 
        {...props} 
      />
  )
}
