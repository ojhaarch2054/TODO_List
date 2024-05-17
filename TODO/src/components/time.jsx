const Time = () => {
    const date = new Date();
    const dateString = date.toLocaleDateString();
    return(
        <div className="Time">
           {dateString} 
        </div>

    )
}

export default Time;