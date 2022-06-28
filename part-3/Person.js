const Person = (props)=>{

    let reply = props.age >= 18 ? "Go Vote" : "You must be 18";
    let hobby = props.hobby.map(h => <li>{h}</li>);
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {props.name.slice(0, 6)}</li>
                <li> Age: {props.age}</li>
                <ul> Hobbies: {hobby} </ul>
            </ul>
            <h3> Voting Right: {reply}</h3>
        </div>

    )
}