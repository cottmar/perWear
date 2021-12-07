import React, { useState } from 'react';

const ItemForm = (props) => {

    const [ itemEntered, setItemEntered ] = useState('');
    const [ amountEntered, setAmountEntered ] = useState('');

    const addItemHandler = (event) => {
        setItemEntered(event.target.value);
    }

    const addAmountHandler = (event) => {
        setAmountEntered(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const itemData = {
            item: itemEntered,
            amount: amountEntered
        }
        
        console.log(itemData, 'this is the item data')

    }

    return (
            <form onSubmit={onSubmit}>
                <label>Item: </label>
                <input 
                    type='text'
                    onChange={addItemHandler}
                    value={itemEntered}
                />
                <label>Amount: </label>
                <input 
                    type='number'
                    onChange={addAmountHandler}
                    value={amountEntered}
                />
                <button type='submit'>Add New Item</button>
            </form>
    )
}

export default ItemForm;