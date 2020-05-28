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

    onButtonAddFood = (food) => {
        food.idProducer = LoggedProfile.getIdUser();
        let url = Constants.WEB_ADDRESS + 'addFood';

        FetchUtil.fetchPost(url, JSON.stringify(food))
            .then(value => this.fetchList(this.state.activePage));
    }

    fetchList = (page) => {
        let url;

        if (this.props.isUser === true) {
            url = Constants.WEB_ADDRESS + 'getAllFreeFood?category=' + this.state.category + '&page=';
        } else {
            url = Constants.WEB_ADDRESS + 'getAllFreeFoodByIdProducer/'+LoggedProfile.getIdUser()+'?page=';
        }
        url += page + '&size=' + this.state.pageSize;

        FetchUtil.fetchGet(url)
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

    onChangeCategory = () => {
        this.setState({
            category: this.refCategory.current.getCategory(),
            activePage: 0
        });
        this.fetchList(0);
    }

    removeHandler = (id) => {
        let url = Constants.WEB_ADDRESS + 'removeFoodById';
        FetchUtil.fetchPost(url, id)
            .then(value => this.fetchList(this.state.activePage));
    }

    onClickReserve = async (indexFood) => {
        let url = Constants.WEB_ADDRESS + 'reserveFood';
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

    isUser(){
        return this.props.isUser === true;
    }

    render() {
        return (
            <React.Fragment>
                {this.isUser() ? null : <AddFood onAdd={this.onButtonAddFood}/>}
                <div className="d-flex justify-content-center m-3">
                    <div className="card">
                        <h3 className="card-header">{this.isUser() ? "Just choose" : "All your Food"}</h3>
                        <div className="card-body">
                            {this.isUser() ? this.userFragment() : this.producerFragment()}
                            <PaginationComponent activePage={this.state.activePage}
                                                 itemsCountPerPage={this.state.itemsCountPerPage}
                                                 totalItemsCount={this.state.totalItemsCount}
                                                 handlePageChange={this.handlePageChange}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    producerFragment() {
        return (
            <div className="d-flex justify-content-center">
                <FoodComponent isUser={false} listFood={this.state.listFood}
                               className="btn btn-danger btn-block"
                               onButtonRemove={this.removeHandler}
                               onClickHandler={this.onClickReserve}
                               text="Remove"/>
            </div>
        );
    }

    userFragment() {
        return (
            <React.Fragment>
                <div className="m-3">
                    <OptionCategory ref={this.refCategory}
                                    categories={Constants.CATEGORIES_ALL}
                                    onChange={this.onChangeCategory}/>
                </div>
                <div className="d-flex justify-content-center">
                    <FoodComponent isUser={true} listFood={this.state.listFood}
                                   className="btn btn-success btn-block"
                                   onClickHandler={this.onClickReserve}
                                   text="Reserve"/>
                </div>
            </React.Fragment>
        );
    }
}
