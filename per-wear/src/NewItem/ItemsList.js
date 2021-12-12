import React from 'react';
import Item from './Item';

const ItemsList = (props) => {

    if (props.item.length === 0) {
        return <h2>Found no expenses.</h2>
    }

    return (
        <ul>
            {props.item.map((item) => (
                <Item 
                    key={item.id}
                    item={item.item}
                    amount={item.amount}
                />
            ))}
        </ul>
    )
}

export default ItemsList;