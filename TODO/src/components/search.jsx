//search component for searchinmg the task
const SearchField = ({searchInput,changeSearchInput}) => {
    return(
       <div>
        <h3>Search Task Here</h3>
        <input value={searchInput} onChange={changeSearchInput}/>
       </div>
    )
}

export default SearchField;