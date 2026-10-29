function NestedObjectsAsProps({person:{name :UserName = "abc",age:UserAge, address:{city:UserCity="chennai"},country:UserCountry}})
{
    return (
        <>
            <h1>{UserName} </h1>
             <h1>{UserAge} </h1>
              <h1>{ UserCity}</h1>
               <h1>{UserCountry} </h1>
        </>
    );
}

export default NestedObjectsAsProps;