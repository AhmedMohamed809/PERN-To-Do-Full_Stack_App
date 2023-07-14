import React ,{Fragment ,useState} from 'react'

function InputTodo() {
    const [description,setDescription] = useState("");
    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            window.location ="/"; // refresh the page 
         } catch (err) {
            console.error(err.massage);
        }
    }
  return (
    <Fragment>
        <h1 className='text-center mt-5'>To do List</h1>
        <form className='d-flex' onSubmit={onSubmitForm}>
            <input type='text' className='form-control' 
            value={description} 
            onChange={e=>setDescription(e.target.value)}
            placeholder='input'
            />
            <button className='btn btn-success'>Add</button>
        </form>
    </Fragment>
  )
}

export default InputTodo