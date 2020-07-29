import React from 'react';
import { Table, Spinner } from 'react-bootstrap';

const DataTable = ({ data }) => {
    
    if (!data.length) {
        return (
            <div className="border">
                <Spinner />
            </div>
        ) 
    }
    
    const tableHeaders =  Object.keys(data[0]);
    let rowCount = 1;

    return (
        <div className="border" >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        { tableHeaders.map((header, i)=> <th key={i}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                   {data.map((item, i) => <tr key={i}>
                        <td>{rowCount++}</td>
                       {tableHeaders.map((header, i) => <td key={i}> {item[header]}</td>)}
                   </tr>)}
                </tbody>
            </Table>            
        </div>
    )
}

export default DataTable;
