import './App.css';
import React, { useState } from 'react';
import NewItem from './NewItem/NewItem';
import ItemsList from './NewItem/ItemsList';

const DUMMY_EXPENSES = [
  {
    id: 'i1',
    item: 'Peloton',
    amount: 1400
  },
  {
    id: 'i2',
    item: 'Clutch',
    amount: 247
  }
]

const App = () => {
  const [ items, setItems ] = useState(DUMMY_EXPENSES);

  const addItemHandler = (item) => {
    setItems(prevItems => {
      console.log('APP ITEM AND PREV ITEMS', item, prevItems)
      return [item, ...prevItems]
    })
    console.log(item, 'IN APP.JS - THE ITEM')
  }

  return (
    <div className="App">
      <NewItem 
        onAddItem={addItemHandler}
      />
      <ItemsList item={items}/>
    </div>
  );
}

export default App;
