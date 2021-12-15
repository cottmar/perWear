import React from 'react';
import AddUseButton from './AddUseButton';
import './Item.css';

const Item = (props) => {
    console.log('THE PROPS IN ITEM', props)
    return (
        <ul>
            <div className="new-item-added">
                <h3>{props.item}</h3>
                <h3>{props.amount}</h3>
            </div>
        </ul>
    )
}

export default Item;