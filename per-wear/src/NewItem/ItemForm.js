import React, { useState } from 'react';

const ItemForm = (props) => {

    const [ enteredItem, setEnteredItem ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');

    const enteredItemHandler = (event) => {
        setEnteredItem(event.target.value);
    }

    const enteredAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const itemData= {
            item: enteredItem,
            amount: enteredAmount
        }

        console.log(itemData, "the item data")
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Item: </label>
            <input 
                type='text'
                value={enteredItem}
                onChange={enteredItemHandler}
            />
            <label>Amount: </label>
            <input 
                type='number'
                value={enteredAmount}
                onChange={enteredAmountHandler}
            />
            <button type='submit'>Add New Item</button>
        </form>
    )
}

export default ItemForm;