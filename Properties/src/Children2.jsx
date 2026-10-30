function Children2({title,children,emp={}})
{
    return(<>
        <h2>{title} </h2>
        {children}
        <h2>{emp.name}</h2>
        <h2> {emp.age}</h2>
    </>);
}


export default Children2;