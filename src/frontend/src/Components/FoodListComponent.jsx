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

    onButtonAddFood = async (food) => {
        food.idProducer = LoggedProfile.getIdUser();
        let url = 'http://localhost:8080/addFood';

        await FetchUtil.fetchPost(url, JSON.stringify(food))
            .then(value => this.fetchList(this.state.activePage));
    }

    fetchList = async (page) => {
        let url;
        let body;

        if (this.props.isUser === true) {
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
        url += page + '&size=' + this.state.pageSize;

        await FetchUtil.fetchPost(url, body)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    listFood: data.content,
                    totalPages: data.totalPages,
                    itemsCountPerPage: data.size,
                    totalItemsCount: data.totalElements
                })
            });
    }

    onChangeCategory = async () => {
        await this.setState({
            category: this.refCategory.current.getCategory()
        });
        await this.setState({
            activePage: 0
        })
        this.fetchList(this.state.activePage);
    }

    removeHandler = async (id) => {
        let url = 'http://localhost:8080/removeFoodById';
        await FetchUtil.fetchPost(url, id)
            .then(value => this.fetchList(this.state.activePage));
    }

    onClickReserve = async (indexFood) => {
        let url = 'http://localhost:8080/reserveFood';
        const food = this.state.listFood[indexFood]
        food.idUser = LoggedProfile.getIdUser()
        await FetchUtil.fetchPost(url, JSON.stringify(food))
            .then(value => this.fetchList(this.state.activePage));
    }

    handlePageChange = (page) => {
        page = page - 1;
        this.setState({
            activePage: page
        });
        this.fetchList(page)
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isUser === true ?
                    <div className="d-flex justify-content-center m-3">
                        <div className="card">
                            <h3 className="card-header">Just choose</h3>
                            <div className="card-body">
                                <OptionCategory ref={this.refCategory} categories={Constants.CATEGORIES_ALL}
                                                onChange={this.onChangeCategory}/>
                                <div className="d-flex justify-content-center p-3">
                                    <FoodComponent isUser={true} listFood={this.state.listFood}
                                                   onClickReserve={this.onClickReserve}/>
                                </div>
                                <PaginationComponent activePage={this.state.activePage}
                                                     itemsCountPerPage={this.state.itemsCountPerPage}
                                                     totalItemsCount={this.state.totalItemsCount}
                                                     handlePageChange={this.handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                    :
                    <React.Fragment>
                        <AddFood onAdd={this.onButtonAddFood}/>
                        <div className="d-flex justify-content-center">

                            <div className="card m-3">
                                <h3 className="card-header">All your Food</h3>
                                <div className="card-body row justify-content-center">
                                    <FoodComponent isUser={false} listFood={this.state.listFood}
                                                   onButtonRemove={this.removeHandler}/>
                                </div>
                                <PaginationComponent activePage={this.state.activePage}
                                                     itemsCountPerPage={this.state.itemsCountPerPage}
                                                     totalItemsCount={this.state.totalItemsCount}
                                                     handlePageChange={this.handlePageChange}
                                />
                            </div>
                        </div>

                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
}
