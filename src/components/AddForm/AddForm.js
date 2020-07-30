import React, { useState } from 'react';
import { Form, Button, Col, Spinner } from 'react-bootstrap'

const AddForm = ({ fields, addItem }) => {

    const [ newItem, setNewItem ] = useState({});

    const handleChange = e => {
        setNewItem(Object.assign(newItem, {[e.target.name]: e.target.value }));
    }

    const handleSubmit = (e, item) => {
        debugger;
        e.preventDefault();
        addItem(item);
    }

    if (!fields.length) {
        return (
            <div>
                <Spinner />
            </div>
        )
    } else {

        const deriveField = function(field) {

            if (field.includes('val')) {
                return 'number';
            }
            return 'text';
        }

        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    
        return (
            <Form>
                <Form.Row>
                    {fields.map((field, i) => 
                        <Form.Group key={i} as={Col} controlId={`${field}-input`}>
                            <Form.Label>{capitalizeFirstLetter(field)}</Form.Label>
                            <Form.Control name={field} type={deriveField(field)} placeholder={`Enter ${field}`} onChange={handleChange} />
                        </Form.Group>
                    )}              
                </Form.Row>
                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e, newItem)}>
                    Add row
                </Button>
            </Form>
        )
    }

}

export default AddForm;
