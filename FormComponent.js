import React from 'react'

function FormComponent(props) {
    return (
        
        <>
            <form>
                <input
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    type='text'
                    placeholder="First Name"
                />
                <input
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    type='text'
                    placeholder="Last Name"
                />
                <input
                    name="age"
                    value={props.data.age}
                    onChange={props.handleChange}
                    placeholder="age"
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                    </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> female
                    </label>

                <br />

                <select name="destination" value={props.data.destination} onChange={props.handleChange} >
                    <option > Please Choose an option </option>
                    <option value="Germany"> Germany </option>
                    <option value="Canada"> Canada </option>
                    <option value="Asia"> Asia </option>
                </select>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestric.isVegan}
                    /> Vegan?
                    </label>

                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestric.isKosher}
                    /> Kosher?
                    </label>

                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestric.isLactoseFree}
                    /> Lactose Free?
                    </label>



                <br />
                <button>Submit </button>
            </form>

            <br />

            <h1> The Info That you entered </h1>
            <h2> Your First Name: {props.data.firstName} </h2><br />
            <h2> Your Last Name: {props.data.lastName} </h2><br />
            <h3> Your Age: {props.data.age} </h3> <br />
            <h4> Gender: {props.data.gender} </h4> <br />

            <h3> Your Destination: {props.data.destination} </h3>

            <h4> Your Dietary restrictions:
                    Vegan: {props.data.dietaryRestric.isVegan ? "Yes" : "No"} <br />
                Kosher: {props.data.dietaryRestric.isKosher ? "Yes" : "No"} <br />
                Lactose: {props.data.dietaryRestric.isLactoseFree ? "Yes" : "No"} <br />
            </h4>
        </>
        
        )
}

export default FormComponent