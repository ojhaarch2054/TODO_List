//AddTask component for adding the task
const AddTask = ({submitTask, inputField, inputChange}) =>{





    return(
        <div className="AddTask">
            <h3>Add Daily Task Here</h3>
            <form className="FormPart" onSubmit={submitTask}>
            <input value = {inputField} onChange={inputChange} placeholder="Add task here.." className="InputArea" />
            <button className='AddtaskBtn' type="submit">Add</button>
            </form>
            
        </div>
    )
}

export default AddTask;