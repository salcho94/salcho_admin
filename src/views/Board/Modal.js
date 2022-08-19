import React, { useState } from 'react';

const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
    const [edited, setEdited] = useState(selectedData);

    const onCancel = () => {
        handleCancel();
    }

    const onEditChange = (e) => {
        setEdited({ //문법
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = (item) => {
        setModalOn(true);
        const selectedData = {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            website: item.website
        };
        console.log(selectedData);
        setSelected(selectedData);
    };

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleEditSubmit(edited);
    }

    return (
        <form onSubmit={onSubmitEdit}>
            <div>ID: {edited.id}</div>
            <div>Name: <input type='text' name='name'
                              value={edited.name} onChange={onEditChange} /></div>
            <div>Email: <input type='text' name='email'
                               value={edited.email} onChange={onEditChange} /></div>
            <div>Phone: <input type='text' name='phone'
                               value={edited.phone} onChange={onEditChange} /></div>
            <div>Website: <input type='text' name='website' value={edited.website}
                                 onChange={onEditChange} /></div>

            <button type='submit'>수정</button>
        </form>
    );
};

export default Modal;