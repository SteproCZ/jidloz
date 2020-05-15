import React from 'react';
import {Food} from "./Food";
import UserProfile from "./UserProfile";
import {OptionCategory} from "./OptionCategory";



export class ListFood extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "All",
            listFood: []
        }
        this.refCategory = React.createRef();
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList = () =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: this.state.category
        };

        if(this.state.category === "All"){
            fetch('http://localhost:8080/getAllFood', requestOptions)
                .then(response => response.json())
                .then(data =>
                    this.setState({
                        listFood: data
                    }));
        }else{
            fetch('http://localhost:8080/findAllByCategory', requestOptions)
                .then(response => response.json())
                .then(data =>
                    this.setState({
                        listFood: data
                    }));
        }


    }

    onChangeCategory = async () => {
        await this.setState({
            category: this.refCategory.current.getCategory()
        });
        this.fetchList();
    }

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    removeFood = async (id) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: id
        };

        await fetch('http://localhost:8080/removeFoodById', requestOptions)
            .then(value => this.fetchList());
    }

    onButtonReserve = async (idFood) => {

        var food;
        //load
        var requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(idFood)
        };

        await fetch('http://localhost:8080/getFoodById', requestOptions)
            .then(response => response.json())
            .then(data => {
                food = data
                const id = food.id;
                const idProducer = food.idProducer;
                const idUser = Number(UserProfile.getId());
                const name = food.name;
                const description = food.description;
                const price = food.price;
                food = {id, idUser,  idProducer, name, description, price};
            });

        //remove
        requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: food.id
        };
        await fetch('http://localhost:8080/removeFoodById', requestOptions)
            .then(value => this.fetchList());

        //save
        requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(food)
        };
        await fetch('http://localhost:8080/addFood', requestOptions)
            .then(value => this.fetchList());
    }

    render() {
        return (
            <React.Fragment>
                <h3>Just choose</h3>
                <OptionCategory ref={this.refCategory}  onChange={this.onChangeCategory}/>
                {this.state.listFood.map((value, index) =>
                    <div key={index}>
                        <Food key={index} name={value.name} description={value.description} price={value.price}/>
                        <button onClick={(evt) => this.onButtonReserve(value.id)}>Reserve</button>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
