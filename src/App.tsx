function App() {
  return (
    <>
      <form className="form-todo-item">
        <div className="form-row">
          <label htmlFor="form-input">Add task</label>
          <input type="text" id="form-input" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header-list">Todo List</h1>
      <ul className="items-list">
        <li className="todo-item">
          <label className="item-label">
            <input type="checkbox" id="item-checkbox" />
            TODO 1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
