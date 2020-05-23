import React from 'react';
import {Food} from "./Food";
import LoggedProfile from "./LoggedProfile";
import {AddFood} from "./AddFood";
import FetchUtil from "./FetchUtil";
import {PaginationComponent} from "./PaginationComponent";


export class ProducerListFood extends React.Component {
    constructor() {
        super();
        this.state = {
            listFood: [],
            activePage: 0,
            totalPages: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 0,
            pageSize: 5
        }
    }

    componentDidMount() {
        this.fetchList(this.state.activePage);
    }

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    onButtonAddFood = async (food) => {
        const id = food.id;
        const idProducer = LoggedProfile.getIdUser();
        const name = food.name;
        const description = food.description;
        const price = food.price;
        const category = food.category;
        const foodResult = {id, idProducer, name, description, price, category};

        let url = 'http://localhost:8080/addFood';

        await FetchUtil.fetchPost(url, JSON.stringify(foodResult))
            .then(value => this.fetchList(this.state.activePage));
    }

    fetchList = (page) =>{
        let url = 'http://localhost:8080/getAllFoodByIdProducer?page='+page+'&size='+this.state.pageSize;

        FetchUtil.fetchPost(url,LoggedProfile.getIdUser())
            .then(response => response.json())
            .then(data =>
                this.setState({
                    listFood: data.content,
                    totalPages: data.totalPages,
                    itemsCountPerPage: data.size,
                    totalItemsCount: data.totalElements
                })
            )
    }

    onButtonRemove = async (id) => {

        let url = 'http://localhost:8080/removeFoodById';
        await FetchUtil.fetchPost(url, id)
            .then(value => this.fetchList(this.state.activePage));
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

                <PaginationComponent activePage={this.state.activePage}
                                     itemsCountPerPage={this.state.itemsCountPerPage}
                                     totalItemsCount={this.state.totalItemsCount}
                                     handlePageChange={this.handlePageChange}
                />s
            </React.Fragment>
        )
    }
}
