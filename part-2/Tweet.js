const Tweet=(props)=>{
    return(
        <div class="tweet">
            
            <span>{props.name}:</span>
            <span>{props.username}:</span>
            <span class="date">{props.date}</span>
            <span class="username">{props.message}</span>
            

        </div>
    )
}