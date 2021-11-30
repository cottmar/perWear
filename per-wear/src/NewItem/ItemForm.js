import React, { useState } from 'react';

const ItemForm = (props) => {

    const [enteredItem, setEnteredItem] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const itemHandler = (event) => {
        setEnteredItem(event.target.value);
    }

    const costHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const itemData = {
            item: enteredItem,
            amount: enteredAmount
        }

        console.log('item data', itemData)

        setEnteredItem('');
        setEnteredAmount('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Item: </label>
                <input 
                    type='text' 
                    onChange={itemHandler} 
                    value={enteredItem}/>
            </div>
            <div>
                <label>Original Cost: </label>
                <input 
                    type='number' 
                    onChange={costHandler}
                    min="0.01"
                    value={enteredAmount}/>
            </div>
            <button type='submit'>Add</button>
        </form>
    )
}

export default ItemForm;