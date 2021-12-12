import React from 'react';

const Item = (props) => {
    console.log('THE PROPS IN ITEM', props)
    return (
        <ul>
            <div>
                <h3>{props.item}</h3>
                <h3>{props.amount}</h3>
            </div>
        </ul>
    )
}

export default Item;