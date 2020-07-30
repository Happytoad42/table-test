import React, { useState } from 'react';
import { Form, Button, Col, Spinner } from 'react-bootstrap';

import { capitalizeFirstLetter, deriveField } from '../../utils/utils'

const AddForm = ({ fields, addItem }) => {

    const [ newItem, setNewItem ] = useState({});

    const handleChange = e => {
        setNewItem(Object.assign(newItem, {[e.target.name]: e.target.value }));
    }

    const handleSubmit = (e, item) => {
        e.preventDefault();
        addItem(item);
        setNewItem({});
        [].forEach.call(e.target.elements, function(item) {
            item.value = '';
        })
    }

    if (!fields.length) {
        return (
            <div>
                <Spinner />
            </div>
        )
    } else {

        
    
        return (
            <Form onSubmit={(e) => handleSubmit(e, newItem)}>
                <Form.Row>
                    {fields.map((field, i) => 
                        <Form.Group key={i} as={Col} controlId={`${field}-input`}>
                            <Form.Label>{capitalizeFirstLetter(field)}</Form.Label>
                            <Form.Control name={field} type={deriveField(field)} placeholder={`Enter ${field}`} onChange={handleChange} />
                        </Form.Group>
                    )}              
                </Form.Row>
                <Button variant="primary" type="submit" >
                    Add row
                </Button>
            </Form>
        )
    }

}

export default AddForm;
