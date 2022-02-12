import React from 'react';
import AddUseButton from './AddUseButton';
import './Item.css';

const Item = ({item, amount}) => {
    return (
        <div className="new-item-added">
            <ul>
                    <h3>{item}</h3>
                    <h3>{amount}</h3>
            </ul>
            <AddUseButton item={item} amount={amount}/>
        </div>
    )
}

export default Item;