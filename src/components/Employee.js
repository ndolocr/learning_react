function Employee(props){
    return (
        <div>
            <ul>
                <li> Name: {props.name}</li>
                {props.role ? <li>{props.role}</li> : <li> No Role</li>}
            </ul>
        </div>
    ); 
}

export default Employee;