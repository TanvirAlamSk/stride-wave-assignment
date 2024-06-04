import React from 'react';
import { Link } from 'react-router-dom';

const ManageProductCard = ({ recipe, index, handelDeleteRecipe }) => {
    const { _id, title, time, type } = recipe;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{time}</td>
            <td>{type}</td>
            <td className='flex gap-2'>
                <Link to={`/dashboard/update-recipe/${_id}`}>
                    <button className='btn btn-sm btn-success text-white'>Update</button>
                </Link>
                <button onClick={() => handelDeleteRecipe(_id)} className='btn btn-sm btn-error text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductCard;