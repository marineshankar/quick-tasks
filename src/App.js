import { useState } from "react";
import "./App.css";

export default function App() {

  const initialItems = ["Create theme",
    "Work on wordpress",
    "organize office main department",
    "Error solve in HTML templates"
  ];

  const [addItem, setAddItem] = useState();
  const [totalItems, setTotalItems] = useState(initialItems);

  const addNewItem = () => {
    setTotalItems([...totalItems, addItem])
  }

  const deleteItem = ({ it }) => {
    setTotalItems(totalItems.filter(fl => fl !== it));
  }

  return (
    <div className="first-container">
      <div>
        <input value={addItem} onChange={(event) => setAddItem(event.target.value)} type="text" placeholder="New Task..."></input>
        <button onClick={addNewItem} >Add New Task</button>
      </div>
      <div>
        <ul>
          {totalItems.map(it => <li className="todo-list">{it} <button onClick={() => deleteItem({ it })}>✖</button></li>)}
        </ul>
      </div>
    </div>
  );
}