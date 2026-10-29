function RenamingPropsDestructuring({name : UserName, age: UserAge=18})
{
    return (
        <>
        <h1>Hello, {UserName} </h1>
        <h1>Is your age  {UserAge} </h1>
        </>
    );


}

export default RenamingPropsDestructuring;