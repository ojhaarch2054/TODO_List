//search component for searchinmg the task
const SearchField = ({searchInput,changeSearchInput, filterSearch}) => {
    return(
       <div className="SearchItem">
        {/*<h3>Search Task Here</h3>*/}
        <label >Search For a Task: </label>
        <input value={searchInput} onChange={changeSearchInput} placeholder="Search Task Here.."/>
        {/*if the searchInput is not empty then it will show the each task in list item*/}
        {/*if the searchInput is empty or there are no items in filterSearch, it will display "No match found*/}
            {searchInput ? 
                (filterSearch.length > 0 ? 
                filterSearch.map(tasks => <li key={tasks.id}>{tasks.task}</li>) 
                : 
                <p>No Match Found</p>
                ) 
            : 
            <></>
            }   
       </div>
        )
    }


    export default SearchField;