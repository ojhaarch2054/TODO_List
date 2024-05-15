
import { useState } from "react"
//import all neccessary component from the component folder
import AddTask from "./components/addTask"
import Lists from "./components/lists"
import SearchField from "./components/search"


function App() {
//state for task array 
const[arrayCollection, setArrayCollection] = useState([
  { task: 'Cleaning', id:1 }
])
//state for unique id
const[counter, setCounter] = useState([2])
//state for input field
const[inputField, setInputField] = useState('Hello')
//state for search input field
const{searchInput, setSearchInput} = useState('')

//submitTask function
const submitTask = (event) => {
  event.preventDefault()
//creating a taskobject which held the data of input field with the unique id
  const taskObj = {
    task: inputField,
    id: counter
  }
  setCounter(previous => previous + 1 )
//add the taskobj item in arrayCollection state
  setArrayCollection(arrayCollection.concat(taskObj))
  setInputField('')
}
//function changeSearchInput
const changeSearchInput = (event) =>{
  //update the value of searchInput
  setSearchInput(event.target.value)
}

//function inputChange 
const inputChange = (event) =>{
  //update the value of inputChange
  setInputField(event.target.value)
}
  return (
    <>
     <div>
      <SearchField changeSearchInput = {changeSearchInput} searchInput= {searchInput}/>
      <AddTask inputField = {inputField} inputChange = {inputChange} submitTask={submitTask}/>
      <Lists arrayCollection={arrayCollection}/>
    
     </div>
    </>
  )
}

export default App
