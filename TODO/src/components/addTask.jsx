//AddTask component for adding the task
const AddTask = ({submitTask, inputField, inputChange}) =>{
    return(
        <div>
            <h3>Add Daily Task Here</h3>
            <form onSubmit={submitTask}>
            <input value = {inputField} onChange={inputChange} />
            <button type="submit">Add</button>
            </form>
            
        </div>
    )
}

export default AddTask;