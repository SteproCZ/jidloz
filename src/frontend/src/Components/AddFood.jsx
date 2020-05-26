import React from 'react';
import {OptionCategory} from "./OptionCategory";
import * as Constants from './Constants'

export class AddFood extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            idProducer: "",
            idUser: "",
            name: "",
            description: "",
            price: 0,
            category: ""
        }
        this.refCategory = React.createRef();
    }

    onButtonAddFood = async () => {
        console.log("neco")
        await this.setState({
            category: this.refCategory.current.getCategory()
        });
        this.props.onAdd(this.state);
    }

    onChangeCategory = () => {
        this.setState({
            category: this.refCategory.current.getCategory()
        });
    }


    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <h3>Add Food</h3>
                <OptionCategory ref={this.refCategory} categories={Constants.CATEGORIES} onChange={this.onChangeCategory}/>
                <div>
                    <label htmlFor="add-food-name">Name</label>
                    <input type="text" name="add-food-name" value={this.state.name}
                           onChange={(evt) => this.onChangeHandler(evt, 'name')}/>
                </div>
                <div>
                    <label htmlFor="add-food-description">Description</label>
                    <input type="text" name="add-food-description" value={this.state.description}
                           onChange={(evt) => this.onChangeHandler(evt, 'description')}/>
                </div>
                <div>
                    <label htmlFor="add-food-price">Price</label>
                    <input type="number" name="add-food-price" value={this.state.price}
                           onChange={(evt) => this.onChangeHandler(evt, 'price')}/>
                </div>
                <button onClick={this.onButtonAddFood}>Take</button>
            </React.Fragment>
        )
    }
}
