import React from 'react';
import LoggedProfile from "./LoggedProfile";
import {OptionCategory} from "./OptionCategory";
import FetchUtil from "./FetchUtil";
import {PaginationComponent} from "./PaginationComponent";
import {FoodComponent} from "./FoodComponent";
import {AddFood} from "./AddFood";
import * as Constants from './Constants'

export class FoodListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "All",
            listFood: [],

            page: {
                activePage: 0,
                totalPages: 0,
                itemsCountPerPage: 0,
                totalItemsCount: 0,
                pageSize: 5
            }
        }
        this.refCategory = React.createRef();
    }

    componentDidMount() {
        this.fetchList(this.state.page.activePage);
    }

    onButtonAddFood = async (food) => {
        food.idProducer = LoggedProfile.getIdUser();
        let url = 'http://localhost:8080/addFood';

        await FetchUtil.fetchPost(url, JSON.stringify(food))
            .then(value => this.fetchList(this.state.page.activePage));
    }

    fetchList = (page) => {
        let url;
        let body;

        if (this.props.isUser === true) {//User - reserve
            if (this.state.category === "All") {
                url = 'http://localhost:8080/getAllFreeFood?page=';
            } else {
                url = 'http://localhost:8080/getAllFreeFoodByCategory?page=';
                body = this.state.category
            }
        } else {//Producer - add
            url = 'http://localhost:8080/getAllFoodByIdProducer?page=';
            body = LoggedProfile.getIdUser();
        }
        url += page + '&size=' + this.state.page.pageSize;

        FetchUtil.fetchPost(url, body)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    listFood: data.content,
                    totalPages: data.totalPages,
                    itemsCountPerPage: data.size,
                    totalItemsCount: data.totalElements
                })
            );
    }

    onChangeCategory = async () => {
        await this.setState({
            category: this.refCategory.current.getCategory()
        });
        await this.setState({
            ...this.state.page,
            activePage: 0
        })
        this.fetchList(this.state.page.activePage);
    }

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    removeHandler = async (id) => {
        let url = 'http://localhost:8080/removeFoodById';
        await FetchUtil.fetchPost(url, id)
            .then(value => this.fetchList(this.state.page.activePage));
    }

    onClickReserve = async (indexFood) => {
        let url = 'http://localhost:8080/reserveFood';
        const food = this.state.listFood[indexFood]
        food.idUser = LoggedProfile.getIdUser()
        await FetchUtil.fetchPost(url, JSON.stringify(food))
            .then(value => this.fetchList(this.state.page.activePage));
    }

    handlePageChange = (page) => {
        page = page - 1;
        this.setState({
            ...this.state.page,
            activePage: page
        });
        this.fetchList(page)
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isUser === true ?
                    <React.Fragment>
                        <h3>Just choose</h3>
                        <OptionCategory ref={this.refCategory} categories={Constants.CATEGORIES_ALL}
                                        onChange={this.onChangeCategory}/>
                        <FoodComponent isUser={true} listFood={this.state.listFood}
                                       onClickReserve={this.onClickReserve}/>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <AddFood onAdd={this.onButtonAddFood}/>
                        <h3>All your Food</h3>
                        <FoodComponent isUser={false} listFood={this.state.listFood}
                                       onButtonRemove={this.removeHandler}/>
                    </React.Fragment>
                }

                <PaginationComponent activePage={this.state.page.activePage}
                                     itemsCountPerPage={this.state.page.itemsCountPerPage}
                                     totalItemsCount={this.state.page.totalItemsCount}
                                     handlePageChange={this.handlePageChange}
                />
            </React.Fragment>
        )
    }
}
