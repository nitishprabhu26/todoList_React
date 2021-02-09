import React from 'react'

export default function About() {
    return (
        // If we dont need div to wrap he contents. This is kind of ghost Element. doesnt show in the dom
        <React.Fragment>
            <h1>About</h1>
            <p>This is a basic TodoList app v1.0.0 developed by Nitish Prabhu Kota. 
                <br></br>
            At this moment, there is no database connected to the app, and hence the state of the todo list is not retained on refreshing the application</p>
        </React.Fragment>
    )
}
