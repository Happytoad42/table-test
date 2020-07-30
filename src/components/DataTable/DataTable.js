import React from 'react';
import { Table, Spinner } from 'react-bootstrap';

const DataTable = ({ data, removeItem }) => {
    
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
                        { tableHeaders.map((header, i) => {
                            if (header !== 'id') {
                                return (<th key={i}>{header}</th>)
                            }
                        } )}
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map((item, i) => <tr key={i}>
                        <td>{rowCount++}</td>
                        {tableHeaders.map((header, ind) => {
                            if (header !== 'id') {
                                return (<td key={ind}> {item[header]}</td>)
                            }
                        } )}
                        <th><button onClick={ () => removeItem(item.id) }>X</button></th>
                   </tr>)}
                </tbody>
            </Table>            
        </div>
    )
}

export default DataTable;
