import React ,{Fragment ,useEffect , useState} from 'react'

function ListTodo() {
    const [todos,setTodo] = useState([]);
    // delete  todo function
    const deleteTodo = async (id) => {
      try {
        const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
          method : "DELETE"
        });
        // window.location ="/";
        setTodo(todos.filter(todo => todo.todo_id !== id ));
      } catch (err) {
        console.error(err.message)
        
      }
    } 
    const getTodos = async()=>{
        try {
            const response = await fetch("http://localhost:5000/todos");
            const data =await response.json();
            setTodo(data);
        } catch (err) {
            console.error(err.message);
            
        }

    }
    useEffect(()=>{
        getTodos();
    },[])
  return (
    <Fragment>
        <table class="table mt-5  table-hover">
  <thead>
    <tr>
      
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col"> Delete</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo=>(

    <tr key={todo.todo_id}>
      <td>{todo.description}</td>
      <td><button className='btn bg-bule'>Edit</button></td>
      <td><button className='btn btn-danger' onClick={()=> deleteTodo(todo.todo_id)}>Delete</button></td>
    </tr>
    ))}
    
  </tbody>
</table>
    </Fragment>
  )
}

export default ListTodo