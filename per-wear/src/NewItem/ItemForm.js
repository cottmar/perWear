import React, { useState } from 'react';

const ItemForm = (props) => {

    const [ itemEntered, setItemEntered ] = useState('');
    const [ amountEntered, setAmountEntered ] = useState('');

    const itemAddHandler = (event) => {
        setItemEntered(event.target.value);
    }

    const amountAddHandler = (event) => {
        setAmountEntered(event.target.handler)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const itemData = {
            item: itemEntered,
            amount: amountEntered
        }
        console.log(itemData, 'This is the item data')
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Item: </label>
            <input 
                type='text'
                value={itemEntered}
                onChange={itemAddHandler}
            />
            <label>Amount: </label>
            <input 
                type='number'
                value={amountEntered}
                onChange={amountAddHandler}
            />
            <button type='submit'>Add New Item and Value</button>
        </form>
    )
}

export default ItemForm;