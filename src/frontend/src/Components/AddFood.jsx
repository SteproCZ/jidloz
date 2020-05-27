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
            <div className="d-flex justify-content-center">
                <div className="card m-3">
                    <h3 className="card-header">Add Food</h3>
                    <div className="card-body">
                        <OptionCategory ref={this.refCategory} categories={Constants.CATEGORIES}
                                        onChange={this.onChangeCategory}/>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" value={this.state.name}
                                   onChange={(evt) => this.onChangeHandler(evt, 'name')}/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input className="form-control" type="text" value={this.state.description}
                                   onChange={(evt) => this.onChangeHandler(evt, 'description')}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input className="form-control" type="number" value={this.state.price}
                                   onChange={(evt) => this.onChangeHandler(evt, 'price')}/>
                        </div>
                        <button className="btn btn-primary btn-block" onClick={this.onButtonAddFood}>Add Food</button>
                    </div>
                </div>
            </div>
        )
    }
}
