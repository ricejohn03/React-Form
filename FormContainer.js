import React from 'react'
import FormComponent from './FormComponent'


class FormContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestric: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false

            }

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                    dietaryRestric: {
                        ...prevState.dietaryRestric,
                        [name]: checked
                    }
                }
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (

            <FormComponent
                handleChange={this.handleChange}
                data={this.state}

            />

        )
    }
}

export default FormContainer