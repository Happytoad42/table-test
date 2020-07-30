import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';

import { capitalizeFirstLetter, deriveField } from '../../utils/utils';

const EditModal = ({ fields, show, onHide, activeItem, editItem }) => {
    debugger;
    let editable = { ...activeItem };

    const handleSubmit = (e, item) => {
        e.preventDefault();
        editItem(item);
        onHide();
    }

    const handleChange = (e) => {
        debugger;
        const newObj = {[e.target.name]: e.target.value };
        editable = Object.assign(editable, newObj);
    };

    return (
        <Modal show={show} onHide={() => onHide()} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e, editable)}>
                    <Form.Row>
                        {fields.map(function(field, i) {
                             return ( <Form.Group key={i} as={Col} controlId={`${field}-input`}>
                                <Form.Label>{capitalizeFirstLetter(field)}</Form.Label>
                                <Form.Control name={field} type={deriveField(field)} placeholder={`Enter ${field}`} onChange={handleChange} defaultValue={editable[field]} />
                            </Form.Group>)
                        }
                           
                        )}              
                    </Form.Row>
                    <Button variant="secondary" onClick={() => onHide()}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EditModal;
