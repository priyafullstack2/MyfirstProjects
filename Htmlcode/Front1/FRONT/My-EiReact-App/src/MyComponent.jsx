import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const[isEmployed,setisEmployed] = useState(false);

    const updateName = () => {
        setName("Priya");
    
    }
    const incrementAge =() => {
        setAge(age + 1);
    }
    const toggleEmployedStatus =() => {
        setisEmployed(!isEmployed);
    }

    return(
        <div>
         <p>Name: {name}</p>
         <button onClick={updateName}> Set Name</button>

        <p>Age : {age}</p>
        <button onClick ={incrementAge}>Increment Age</button>

        <p>is employed : {isEmployed ? "yes" : "No"}</p>
        <button onClick = {toggleEmployedStatus}>Toggle Status</button>


        </div>


    );
}
export default MyComponent