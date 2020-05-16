import React from 'react';
import {Food} from "./Food";


export class OptionCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.categories[0]
        }
    }

    handleChange = async (event) => {
        await this.setState({[event.target.name]: event.target.value});
        this.props.onChange(this.state);
    }

    getCategory = () => {
        return this.state.category;
    }

    render() {
        return (
           <ReactExample name="category" categories={this.props.categories} multiple={this.state.category} handleChange={this.handleChange} />
        )
    }
}

export const ReactExample = ({name, categories, handleChange}) => (
    <select name={name} onChange={handleChange}>
        {categories.map((value, index) =>
            <option key={index} name={value}>{value}</option>
        )}
    </select>);
