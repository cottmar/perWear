import React from 'react';
import AddUseButton from './AddUseButton';
import './Item.css';


const Item = ({item, ogAmount, useCount}) => {
    
    return (
        <div className="new-item-added">
            <ul>
                    <h3>{item}</h3>
                    <h3>{ogAmount}</h3>
                    <h2>{useCount}</h2>
            </ul>
            <AddUseButton item={item} ogAmount={ogAmount} useCount={useCount}/>
        </div>
    )
}

export default Item;