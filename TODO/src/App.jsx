import './App.css'
import { useState } from "react"
//import all neccessary component from the component folder
import AddTask from "./components/addTask"
import Lists from "./components/lists"
import SearchField from "./components/search"
import Time from './components/time'


function App() {
//state for task array 
const[arrayCollection, setArrayCollection] = useState([
  { task: 'Cleaning', id:1 },
  { task: 'washing', id:9 },
  { task: 'dancing', id:10 }

])
//state for unique id
const[counter, setCounter] = useState([2])
//state for input field
const[inputField, setInputField] = useState('')
//state for search input field
const[searchInput, setSearchInput] = useState('')
//state for filtering the search item
const[filterSearch, setFilterSearch] = useState([])

//submitTask function
const submitTask = (event) => {
  event.preventDefault()
//creating a taskobject which held the data of input field with the unique id
  const taskObj = {
    task: inputField,
    id: counter
  }
  setCounter(previous => previous + 1 )
  //condition for checking whether there is same task in the list or not if yes then give alert about that
  //to remove the case sensitiveness during the searching time added toLowerCase in both side
  const existingTask = arrayCollection.filter(task => task.task.toLowerCase() === inputField.toLowerCase());
  if(existingTask.length > 0){
    alert(`${inputField} already added to task`)
  }else{
    //add the taskobj item in arrayCollection state
  setArrayCollection(arrayCollection.concat(taskObj))
  setInputField('')
  }
}
//function changeSearchInput
const changeSearchInput = (event) =>{
  //update the current value of searchInput
  const searchItem = event.target.value
  setSearchInput(searchItem)
  
  //this create a new array of item which convert the task and search item into lowecase which prevent the search caseSensitive
  const filteredItem = arrayCollection.filter((tasks) => tasks.task.toLowerCase().includes(searchItem.toLowerCase()))
  //filtered items will store in filterSearch
  setFilterSearch(filteredItem);
}


//function inputChange 
const inputChange = (event) =>{
  //update the value of inputChange
  setInputField(event.target.value)
}

const handleDelete = (id) => {
  setArrayCollection(prev => prev.filter(item => item.id !== id));
}

  return (
    <>
     <div className='Todo'>
      <AddTask inputField = {inputField} inputChange = {inputChange} submitTask={submitTask}/>
      <Time/>
      <Lists arrayCollection={arrayCollection} handleDelete={handleDelete}/>
      <div className="SearchContainer">
      <SearchField changeSearchInput = {changeSearchInput} searchInput= {searchInput} filterSearch={filterSearch}/>

      </div>
      
     </div>
    </>
  )
}

export default App
