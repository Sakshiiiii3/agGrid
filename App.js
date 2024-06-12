//import logo from './logo.svg';
//import './App.css';
import { useState,useMemo } from "react";
import { AgGridReact } from 'ag-grid-react'; // 
import './App.css';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
function App() {
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  },
  ]);
  
  // Column Definitions: Defines the columns to be displayed.
  const CustomButtonComponent = (props) => {
    return <button onClick={() => window.alert('clicked') }>Push Me!</button>;
  };
 

  const [columnDefs, setColumnDefs] = useState([
   
    { field: "price", valueFormatter: p => '£' + p.value.toLocaleString()  },

    { field: "make", flex: 2, editable: true, cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
          values: ['Tesla', 'Ford', 'Toyota'],
      },
    }, //This column will be twice as wide as the others
    { field: "model", flex: 1  , editable: true,filter:"true"},
   // { field: "price", flex: 1 },
    { field: "electric", flex: 1 },
   // { headerName: "Make & Model", valueGetter: p => p.make + ' ' + p.model}
    { field: "button", cellRenderer: CustomButtonComponent },

    {
      field: "month",
      comparator: (valueA, valueB) => {
          const months = [
              'January', 'February', 'March', 'April',
              'May', 'June', 'July', 'August',
              'September', 'October', 'November', 'December',
          ];
          const idxA = months.indexOf(valueA);
          const idxB = months.indexOf(valueB);
          return idxA - idxB;
      },
  }

]);
const rowSelection = 'multiple';


const rowClassRules = useMemo(() => {
  return {
    // apply red to Ford cars
    "rag-red": (params) => params.data.make === "Ford",
  };
}, []);


  
  return (
    <div className="ag-theme-quartz"  style={{ height: 500 }}>
      <h3>Used flex here.</h3>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} rowSelection={rowSelection}
         pagination={true}
         paginationPageSize={10}
         paginationPageSizeSelector={[10, 25, 50]}
         rowClassRules={rowClassRules} 
       />
       

    </div>
  );
}

export default App;
