import React from 'react';

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
            <tr className='"bg-white border-2 border-gray-200'>
                <td className='px-4 py-3'>{item.boardIdx}</td>
                <td className='px-4 py-3'>{item.title}</td>
                <td className='px-4 py-3'>{item.content}</td>
                <td className='px-4 py-3'>{item.writer}</td>
                <td className='px-4 py-3'>{item.insertDt}</td>
                <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
                    <i class="far fa-edit"></i></td>
                <td onClick={onRemove} className='text-center text-purple-400 cursor-pointer'>
                    <i class="far fa-trash-alt"></i></td>
            </tr>
        </>
    )
};

export default Td;