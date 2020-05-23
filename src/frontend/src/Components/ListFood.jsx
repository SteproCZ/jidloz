import React from 'react';
import {Food} from "./Food";
import LoggedProfile from "./LoggedProfile";
import {OptionCategory} from "./OptionCategory";
import FetchUtil from "./FetchUtil";
import {PaginationComponent} from "./PaginationComponent";
import {FoodComponent} from "./FoodComponent";

export class ListFood extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "All",
            listFood: [],
            activePage: 0,
            totalPages: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 0,
            pageSize: 5
        }
        this.refCategory = React.createRef();
    }

    componentDidMount() {
        this.fetchList(this.state.activePage);
    }

    fetchList = (page) =>{
        let url;

        if(this.state.category === "All"){
            url = 'http://localhost:8080/getAllFood?page='+page+'&size='+this.state.pageSize;
        }else{
            url = 'http://localhost:8080/findAllByCategory?page='+page+'&size='+this.state.pageSize;
        }

        FetchUtil.fetchPost(url, this.state.category)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    listFood: data.content,
                    totalPages: data.totalPages,
                    itemsCountPerPage: data.size,
                    totalItemsCount: data.totalElements
                }));
    }

    onChangeCategory = async () => {
        await this.setState({
            category: this.refCategory.current.getCategory()
        });
        this.setState({
            activePage: 0
        })

        this.fetchList(this.state.activePage);
    }

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    removeFood = async (id) => {
        let url = 'http://localhost:8080/removeFoodById';

        await FetchUtil.fetchPost(url, id)
            .then(value => this.fetchList(this.state.activePage));
    }

    onClickReserve = async (indexFood) => {
        let url = 'http://localhost:8080/reserveFood';
        console.log(this.state.listFood[indexFood])
        const food = this.state.listFood[indexFood]
        food.idUser = LoggedProfile.getIdUser()
        await FetchUtil.fetchPost(url, JSON.stringify(food))
            .then(value => this.fetchList(this.state.activePage));
    }

    handlePageChange = (page) => {
        page = page - 1;
        this.setState({activePage: page});
        this.fetchList(page)
    }

    render() {
        return (
            <React.Fragment>
                <h3>Just choose</h3>
                <OptionCategory ref={this.refCategory} categories={["All","Food","Meal"]} onChange={this.onChangeCategory}/>
                <FoodComponent isUser={true} listFood={this.state.listFood} onClickReserve={this.onClickReserve}/>

                <PaginationComponent activePage={this.state.activePage}
                                     itemsCountPerPage={this.state.itemsCountPerPage}
                                     totalItemsCount={this.state.totalItemsCount}
                                     handlePageChange={this.handlePageChange}
                />
            </React.Fragment>
        )
    }
}
