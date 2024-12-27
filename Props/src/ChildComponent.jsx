// import React from 'react';

function ChildComponent(props) {
    // Destructuring props
    const { name, age, userInfo, hobbies } = props;

    return (
        <div>
            <h2>Child Component</h2>
            {/* Display the props */}
            <p>Name: {name}</p> {/* Display the name */}
            <p>Age: {age}</p> {/* Display the age */}
            
            {/* Display the object data (userInfo) */}
            {userInfo && <p>Location: {userInfo.location}</p>} {/* Check if userInfo is passed */}
            
            {/* Display the array data (hobbies) */}
            {hobbies && (
                <>
                    <h3>Hobbies:</h3>
                    <ul>
                        {hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li> // Loop through and display each hobby
                        ))}
                    </ul>
                </>
            )}

            <hr />
        </div>
    );
}

export default ChildComponent;
