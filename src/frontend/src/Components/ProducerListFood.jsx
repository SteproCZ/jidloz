import React from 'react';
import {Food} from "./Food";
import UserProfile from "./UserProfile";
import {AddFood} from "./AddFood";


export class ProducerListFood extends React.Component {
    constructor() {
        super();
        this.state = {
            listFood: []
        }
        //this.fetchList = this.fetchList.bind(this);
    }

    componentDidMount() {
        this.fetchList();
    }

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    onButtonAddFood = async (food) => {
        const id = food.id;
        const idProducer = UserProfile.getId();
        const name = food.name;
        const description = food.description;
        const price = food.price;
        const category = food.category;
        const foodResult = {id, idProducer, name, description, price, category};

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(foodResult)
        };

        await fetch('http://localhost:8080/addFood', requestOptions)
            .then(value => this.fetchList());
    }

    fetchList = () =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(UserProfile.getId())
        };
        fetch('http://localhost:8080/getAllFoodByIdProducer', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    listFood: data
                });
            })
    }

    onButtonRemove = async (id) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: id
        };

        await fetch('http://localhost:8080/removeFoodById', requestOptions)
            .then(value => this.fetchList());
    }

    onButtonDone(){

    }

    render() {
        return (
            <React.Fragment>
                <AddFood onAdd={this.onButtonAddFood}/>
                <h3>All your Food</h3>
                {this.state.listFood.map((value, index) =>
                    <div key={index}>
                        <Food key={index} name={value.name} description={value.description} price={value.price}/>
                        <button onClick={(evt) => this.onButtonRemove(value.id)}>Remove</button>
                        <button onClick={this.onButtonDone()}>Done</button>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
