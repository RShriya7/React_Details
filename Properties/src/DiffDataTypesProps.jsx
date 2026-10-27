function Child({props})
{
    return (
        <>
            {/* 1.string */}
            <h2> Name : {props.name}</h2>

            {/* 2.Number */}
            <p> Age: {props.age}</p>
            
             {/* 3. Boolean */}
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>

            {/* 4. Array */}
            <p>Skills: {props.skills.join(", ")}</p>

            {/* 5. Object */}
            <p>City: {props.user.name}</p>

            {/* 6. Function */}
            <button onClick={props.onClick}>
                Click Me
            </button>

            {/* 7. JSX */}
            <div>Icon: {props.icon}</div>
        </>
    );

}