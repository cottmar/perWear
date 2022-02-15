import React from 'react';
import ItemForm from './ItemForm'

const NewItem = (props) => {

    const saveItemDataHandler = (enteredItemData) => {
        console.log('inside new item .js entered item data', enteredItemData)
        const itemData = {
            ...enteredItemData,
            id: Math.random().toString()
        }
        props.onAddItem(itemData);
    }

    return (
        <div>
            <ItemForm 
                onSaveItemData={saveItemDataHandler}
            />
        </div>
    )

}

export default NewItem;
