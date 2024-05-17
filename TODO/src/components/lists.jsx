import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

//List component for showing the list of added task
const Lists = ({arrayCollection, handleDelete}) => {
    //useState for square icon
    const [isClicked, setIsClicked] = useState({})
    //useState for delete icon
    //const [deleteItem, setDeleteItem] = useState('')
    
//take id as a parameter to know which icon is clicked
    const iconClick = (id) => {
        //create a new obj which includes the previous one also and works as a toogle
        setIsClicked(prev => ({ ...prev, [id]: !prev[id] }));
    };
//create a function to delete the task line when user click to delete icon
const deletedClick = (id) => {
    handleDelete(id);
}
    return(
        <div className="Lists">
        <ul >
            {arrayCollection.map((list) =>
                <li key = {list.id}>
                <FontAwesomeIcon icon={faSquare} className='SquareIcon'  onClick={() => iconClick(list.id)} 
                 style={{backgroundColor: isClicked[list.id] ? 'green' : {},
                 }}
                 />
                <span className="ListItemText"  
                    style={{textDecoration: isClicked[list.id] ? 'line-through' : {},
                    }}>
                    {list.task.toUpperCase()}
                </span><br />

                 <FontAwesomeIcon icon={faTrash} className='TrashIcon' onClick={() => deletedClick(list.id)} /> 
                </li> )}
        </ul>
        </div>

    )
}

export default Lists;