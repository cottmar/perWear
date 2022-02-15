import './App.css';
import React, { useState } from 'react';
import NewItem from './NewItem/NewItem';
import ItemsList from './NewItem/ItemsList';

const DUMMY_EXPENSES = [
  {
    id: 'i1',
    item: 'Peloton',
    amount: 1400,
    useCount: 0
  },
  {
    id: 'i2',
    item: 'Clutch',
    amount: 247, 
    useCount: 2
  }
]

const App = () => {

  const [ items, setItems ] = useState(DUMMY_EXPENSES);

  const addItemHandler = (item) => {
    setItems(prevItems => {
      return [item, ...prevItems]
    })
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
