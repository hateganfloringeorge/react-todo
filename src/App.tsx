function App() {
  return (
    <>
      <form>
        <div>
          <label>Add task</label>
          <input />
        </div>
        <button>Add</button>
      </form>
      <h1>Todo List</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            TODO 1
          </label>
          <button>Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
