//search component for searchinmg the task
const SearchField = ({searchInput,changeSearchInput, filterSearch}) => {
    return(
       <div>
        <h3>Search Task Here</h3>
        <input value={searchInput} onChange={changeSearchInput}/>
        {/*if the searchInput is not empty then it will show the each task in list item*/}
        {/*if the searchInput is empty or there are no items in filterSearch, it will display "Not Added"*/}
        {searchInput && 
        (filterSearch.length > 0) ? 
           (
             filterSearch.map(tasks => <li key={tasks.id}>{tasks.task}</li>)
            )
        :
        <p>Not Added</p>
        }      
       </div>
        )
    }


    export default SearchField;