import React, { useState } from 'react';

const ItemForm = (props) => {

    const [ enteredItem, setEnteredItem ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');
    const [ useCount, setUseCount] = useState(0);

    const enteredItemHandler = (event) => {
        setEnteredItem(event.target.value);
    }

    const enteredAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const itemData= {
            id: 1 + Math.random(),
            item: enteredItem,
            amount: enteredAmount,
            useCount: useCount
        }

        if (!enteredItem && !enteredAmount) {
            return alert('Please add the item and original amount paid')
        }
        // this is coming from NewItem.js -- form and itemData are being passed down 
        props.onSaveItemData(itemData);
        setEnteredAmount('');
        setEnteredItem('');

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