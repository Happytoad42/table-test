import React, { useState } from 'react';
import { Table, Spinner, Button } from 'react-bootstrap';
import EditModal from '../EditModal'

import AddForm from '../AddForm';

const DataTable = ({ data, fields, removeItem, addItem, editItem }) => {

    // Modal state
    const [modalVisile, setModalVisible] = useState(false);
    // Item being edited
    const [activeItem, setActiveItem] = useState({});

    // Modal controls
    const handleClose = () => {
        setModalVisible(false)
    };
    const handleShow = (item) => {
        setActiveItem(item);
        setModalVisible(true)
    };
    
    // Error handling
    if (!data.length) {
        return (
            <div className="border">
                <Spinner />
            </div>
        ) 
    }
    
    // Init once
    const tableHeaders =  Object.keys(data[0]);
    let rowCount = 1;

    return (
        <div className='wrapper border' >
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        { tableHeaders.map((header, i) => {
                            // Symbols not working in redux, duh
                            if (header !== 'id') {
                                return (<th key={i}>{header}</th>)
                            }
                            return false;
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
                            return false;
                        } )}
                        <th>
                            <Button 
                                size="sm" 
                                variant="danger" 
                                onClick={ () => removeItem(item.id) }>Del</Button>
                            <Button 
                                size="sm" 
                                variant="primary" 
                                onClick={() => handleShow(item)}>Edit</Button>
                        </th>
                   </tr>)}
                </tbody>
            </Table>
            <hr/>
            <AddForm addItem={addItem} fields={fields}/>
            <EditModal 
                show={modalVisile} 
                fields={fields} 
                onHide={handleClose} 
                editItem={editItem} 
                activeItem={activeItem}/>
        </div>
    )
}

export default DataTable;
