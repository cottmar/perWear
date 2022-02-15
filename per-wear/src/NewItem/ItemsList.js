import React from 'react';
import AddUseButton from './AddUseButton';
import Item from './Item';

const ItemsList = (props) => {

    if (props.item.length === 0) {
        return <h2>Found no expenses.</h2>
    }



    return (
        <div>
            <ul>
                {props.item ? props.item.map((item) => (
                    <div>
                    <Item 
                        key={item.id}
                        item={item.item}
                        ogAmount={item.amount}
                        useCount={item.useCount}
                   />
                   <AddUseButton useCount={item.useCount}/>
                   </div>

                )) : ''}
            </ul>
        </div>
    )
}

export default ItemsList;