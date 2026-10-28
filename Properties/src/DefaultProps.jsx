function DefaultProps({name,age=18})
{
    return (
        <div>
            <h1>Name:{name} Age:{age} </h1>
        </div>
    );
}

export default DefaultProps;