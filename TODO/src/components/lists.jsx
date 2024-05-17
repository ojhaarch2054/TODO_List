import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


//List component for showing the list of added task
const Lists = ({arrayCollection}) => {
    //useState for square icon
    const [isClicked, setIsClicked] = useState({})
    //useState for delete icon
    const [deleteItem, setDeleteItem] = useState('')
    
//take id as a parameter to know which icon is clicked
    const iconClick = (id) => {
        //create a new obj which includes the previous one also and works as a toogle
        setIsClicked(prev => ({ ...prev, [id]: !prev[id] }));
    };
//create a function to delete the task line when user click to delete icon
    const deletedClick = (id) => {
        setDeleteItem(prev => ({...prev, [id]: !prev[id]}))
    }
    return(
        <div className="Lists">
        <ul >
            {arrayCollection.map((list) =>
                <li key = {list.id}>
                <FontAwesomeIcon icon={faSquare} className='SquareIcon'  onClick={() => iconClick(list.id)} 
                 style={{backgroundColor: isClicked[list.id] ? 'green' : {},
                 display: deleteItem[list.id] ? 'none' : ''}}
                 />
                <span className="ListItemText"  
                    style={{textDecoration: isClicked[list.id] ? 'line-through' : {},
                    display: deleteItem[list.id] ? 'none' : ''}}>
                    {list.task}
                </span>

                 <FontAwesomeIcon icon={faTrash} className='TrashIcon' onClick={() => deletedClick(list.id)} style={deleteItem[list.id] ? { display: 'none' } : {}}/> 
                </li> )}
        </ul>
        </div>

    )
}

export default Lists;