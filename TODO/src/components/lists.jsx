//List component for showing the list of added task
const Lists = ({arrayCollection}) => {
    return(
        <ul>
            {arrayCollection.map((list) => <li key = {list.id}>{list.task}</li> )}
        </ul>

    )
}

export default Lists;