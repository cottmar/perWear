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
        console.log(itemData, '__NEW ITEM__ item data')
    }
    
    return (
        <div>
            <ItemForm onSaveItemData={saveItemDataHandler}/>
        </div>
    )

}

export default NewItem;

// const NewItem = (props) => {

//     const [ isEdited, setIsEdited ] = useState(false);

//     const saveItemDataHandler = (enteredItemData) => {
//         console.log('inside new item .js entered item data', enteredItemData)
//         const itemData = {
//             ...enteredItemData,
//             id: Math.random().toString()
//         }
//         props.onAddItem(itemData);
//         setIsEdited(true)
//         console.log(itemData, '__NEW ITEM__ item data')
//     }

//     const startEditingHandler = () => {
//         setIsEdited(true);
//     }

//     const stopEditingHandler = () => {
//         setIsEdited(false);
//     }
    
//     return (
//         <div>
//             { isEdited && <ItemForm onSaveItemData={saveItemDataHandler}/> ? <AddUseButton /> : <ItemForm onSaveItemData={saveItemDataHandler}/>}
//         </div>
//     )

// }

// export default NewItem;
