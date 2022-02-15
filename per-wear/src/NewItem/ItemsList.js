import React, { useState } from 'react';
import Item from './Item';

const ItemsList = (props) => {

    const [ ogAmount, setNewAmount ] = useState(0);
    console.log(ogAmount, setNewAmount, 'THE AMOUNTS')

    // const [ ogUseCount, setNewUseCount ] = useState(0);
    // console.log(ogUseCount, setNewUseCount, 'THE COUNTS' )


    if (props.item.length === 0) {
        return <h2>Found no expenses.</h2>
    }



    return (
        <div>
            <ul>
                {props.item.map((item) => (
                    <Item 
                        key={item.id}
                        item={item.item}
                        ogAmount={item.amount}
                        useCount={item.useCount}
                   />
                ))}
            </ul>
        </div>
    )
}

export default ItemsList;