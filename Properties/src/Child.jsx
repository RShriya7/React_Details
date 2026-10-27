//Ex-1 to know how can we pass props to the component.
function Child(props)
{
    
    return (
        <div>
            <h2> Name : {props.name}</h2>
            <h2> Age : {props.age} </h2>
        </div>
    );
}

export default Child;