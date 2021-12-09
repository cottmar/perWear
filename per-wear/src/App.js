import './App.css';
import NewItem from './NewItem/NewItem';

function App() {

  const addItemHandler = (item) => {
    console.log(item, 'THE ITEM')
  }

  return (
    <div className="App">
      <NewItem 
        onAddItem={addItemHandler}
      />
    </div>
  );
}

export default App;
