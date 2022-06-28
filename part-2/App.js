const App=()=>{
    return(
        <div>
            <Tweet 
            name="Aung" 
            username="azhm"
            date={ new Date().toDateString()}
            message="How you doing?" />

            <Tweet 
            name="Zin" 
            username="azhm111"
            date={ new Date().toDateString()}
            message="How are you doing?" />

            <Tweet 
            name="Hein" 
            username="azhm5686"
            date={ new Date().toDateString()}
            message="How is the weather?" />

            <Tweet
            name="Myint" 
            username="wwwwazhm"
            date={ new Date().toDateString()}
            message="How old are you?" />
        </div>
    )
}