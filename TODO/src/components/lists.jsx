import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


//List component for showing the list of added task
const Lists = ({arrayCollection}) => {
    //useState for square icon
    const [isClicked, setIsClicked] = useState({});
    
//take id as a parameter to know which icon is clicked
    const handleClick = (id) => {
        //create a new obj which includes the previous one also and works as a toogle
        setIsClicked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return(
        <div className="Lists">
        <ul >
            {arrayCollection.map((list) =>
                <li key = {list.id}>
                <FontAwesomeIcon icon={faSquare} className='SquareIcon'  onClick={() => handleClick(list.id)}  
                style={isClicked[list.id] ? { backgroundColor: 'green' } : {}}/>
                <span className="ListItemText" style={isClicked[list.id] ? { textDecoration: 'line-through' } : {}} >{list.task}</span>
                 <FontAwesomeIcon icon={faTrash} className='TrashIcon' /> 
                </li> )}
        </ul>
        </div>

    )
}

export default Lists;