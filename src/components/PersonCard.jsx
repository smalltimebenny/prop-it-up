// import React from "react";
// const PersonCard = (props) => {
//     return(
//         <>
//             <h1>{props.lastName}, {props.firstName}</h1>
//             <p>Age: {props.age}</p>
//             <p>Hair color: {props.hairColor}</p>
//         </>
//     )
// }

// export default PersonCard;

import React, {useState} from "react";
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [givenAge, setGivenAge] = useState(age)

    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {givenAge}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick = {(event) => setGivenAge(givenAge + 1)}>Get older</button>
        </div>
    )
    
}







export default PersonCard;

