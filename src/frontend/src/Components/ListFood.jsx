import React from 'react';
import {Food} from "./Food";
import UserProfile from "./UserProfile";
import {OptionCategory} from "./OptionCategory";
import FetchUtil from "./FetchUtil";

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
        let url;

        if(this.state.category === "All"){
            url = 'http://localhost:8080/getAllFood';
        }else{
            url = 'http://localhost:8080/findAllByCategory';
        }

        FetchUtil.fetchPost(url, this.state.category)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    listFood: data
                }));
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
        let url = 'http://localhost:8080/removeFoodById';

        await FetchUtil.fetchPost(url, id)
            .then(value => this.fetchList());
    }

    onButtonReserve = async (idFood) => {

        var food;

        let url = 'http://localhost:8080/getFoodById';

        await FetchUtil.fetchPost(url, JSON.stringify(idFood))
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

        url = 'http://localhost:8080/removeFoodById';

        await FetchUtil.fetchPost(url, food.id)
            .then(value => this.fetchList());

        url = 'http://localhost:8080/addFood';

        await FetchUtil.fetchPost(url, JSON.stringify(food))
            .then(value => this.fetchList());

    }

    render() {
        return (
            <React.Fragment>
                <h3>Just choose</h3>
                <OptionCategory ref={this.refCategory} categories={["All","Food","Meal"]} onChange={this.onChangeCategory}/>
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
