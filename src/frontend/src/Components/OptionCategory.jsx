import React from 'react';


export class OptionCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "Food"
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    getCategory = () => {
        return this.state.category;
    }

    render() {
        return (
            <ReactExample name="category" multiple={this.state.selectedCategory} handleChange={this.handleChange} />
        )
    }
}

export const ReactExample = ({ name, value, handleChange }) => (
    <select name={name} value={value} onChange={handleChange}>
        <option value="Food">Food</option>
        <option value="Meal">Meal</option>
    </select>
)
