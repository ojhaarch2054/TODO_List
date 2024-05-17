const Time = () => {
    const date = new Date();
    const dateString = date.toLocaleDateString();
    return(
        <div>
           {dateString} 
        </div>

    )
}

export default Time;