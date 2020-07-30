import React from 'react';
import { Table, Spinner, Button } from 'react-bootstrap';

import AddForm from '../AddForm';

const DataTable = ({ data, fields, removeItem, addItem }) => {
    
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
                        <th> </th>
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
                        <th><Button size="sm" variant="danger" onClick={ () => removeItem(item.id) }>Del</Button><Button size="sm" variant="primary">Edit</Button></th>
                   </tr>)}
                </tbody>
            </Table>
            <hr/>
            <AddForm addItem={addItem} fields={fields}/>

        </div>
    )
}

export default DataTable;
