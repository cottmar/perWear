import React from 'react';

const ItemsList = (props) => {

    console.log(props, 'what are the props')
    if (props.item.length === 0) {
        return <h2>Found no expenses.</h2>
    }

    return (
        <p>CARAAAAA</p>
    )
}

export default ItemsList;