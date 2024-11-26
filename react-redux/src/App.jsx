import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from './redux/slices/todoSlice'
import './App.css'

function App() {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo))
  }

  return (
    <>
      <h1>React Toolkit ToDo App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const todo = e.target[0].value
          handleAddTodo({
            id: Date.now(),
            title: todo,
            completed: false
          })
        }}
      >
        <input type="text" name='todo' id='todo-input' />
        <button type='submit'>Add ToDo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => (handleDelete(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
