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

import React from "react";
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return(
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
        </>
        
    )
}

export default PersonCard;