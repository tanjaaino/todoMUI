import { Button } from "@mui/material";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";


export default function TodoGrid(props){

        // columnsdef
        const columns = [
            { headerName: 'Description', field: 'description', sortable: true, filter: true },
            { headerName: 'Date', field: 'date', sortable: true, filter: true },
            {
                headerName: 'Priority', field: 'priority', sortable: true, filter: true,
                cellStyle: params => params.value > 11 ? { color: 'red', } : { color: 'black' }
            }
        ];
    
        const gridRef = useRef();
    
        const deleteSelected = () => {
            if (gridRef.current.getSelectedNodes().length > 0) {
                const removeIndex = gridRef.current.getSelectedNodes()[0].id;
                console.log("removeid: " + removeIndex);
                props.deleteByIndex(removeIndex);
            } else {
                alert('Select Row first!');
            }
        }
    
        return (
            <>

                <div className="ag-theme-material"
                    style={{ height: '900px', width: '70%', margin: 'auto' }}>
                    <h2>Todos</h2>
                    <Button
                        onClick={deleteSelected}
                        variant="contained">
                        Poista valittu</Button>
                    <AgGridReact
                        columnDefs={columns}
                        rowData={props.todos}
                        rowSelection="single"
                        ref={gridRef}
                        onGridReady={params => gridRef.current = params.api}
                    >
                    </AgGridReact>
                   
                </div>
            </>
        )
    }
    
