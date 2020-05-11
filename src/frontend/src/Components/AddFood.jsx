import React from 'react';


export class AddFood extends React.Component {
    PRODUCER: "ROLE_PRODUCER";
    constructor() {
        super();
        this.state = {
            id: "",
            idProducer: "",
            name: "",
            description: "",
            price: 0
        }
    }

    onButtonAddFood = () => {
        this.props.onAdd(this.state);
    }


    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <h3>Add Food</h3>
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
