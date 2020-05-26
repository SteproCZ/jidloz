import React from 'react';
import LoggedProfile from "./LoggedProfile";
import FetchUtil from "./FetchUtil";
import {PaginationComponent} from "./PaginationComponent";
import {ReservationComponent} from "./ReservationComponent";

export class ReservationsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            reservations: [],

            page: {
                activePage: 0,
                totalPages: 0,
                itemsCountPerPage: 0,
                totalItemsCount: 0,
                pageSize: 5
            }
        }
    }

    componentDidMount() {
        this.fetchList(this.state.page.activePage);
    }

    fetchList = async (page) => {
        let url, body;
        if (this.props.isUser) {
            url = 'http://localhost:8080/getAllByIdUserWithAddress';
        } else {
            url = 'http://localhost:8080/getAllByIdProducerWithAddress';
        }
        url += '?page=' + page + '&size=' + this.state.page.pageSize;

        body = LoggedProfile.getIdUser();

        await FetchUtil.fetchPost(url, body)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        reservations: data.content,
                        totalPages: data.totalPages,
                        itemsCountPerPage: data.size,
                        totalItemsCount: data.totalElements
                    })
                }
            );
    }

    onClickDone = (indexFood) => {
        const food = this.state.reservations[indexFood];
        console.log(food.id);
        let url;
        /*
            url = 'http://localhost:8080/removeFoodById';
            FetchUtil.fetchPost(url, food.id)
                .then(value => this.fetchList(this.state.page.activePage));*/

        console.log(food.category);

        url = 'http://localhost:8080/statisticIncrementation';
        FetchUtil.fetchPost(url, food.category)
            .then();
    }

    onClickCancel = async (indexFood) => {
        let url = 'http://localhost:8080/unReserveFood';
        const food = this.state.reservations[indexFood];
        food.idUser = 0;
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
                    <ReservationComponent isUser={true} reservations={this.state.reservations}
                                          onClickCancel={this.onClickCancel}/>
                    :
                    <ReservationComponent isUser={false} reservations={this.state.reservations}
                                          onClickDone={this.onClickDone}/>
                }
                <PaginationComponent activePage={this.state.page.activePage}
                                     itemsCountPerPage={this.state.page.itemsCountPerPage}
                                     totalItemsCount={this.state.page.totalItemsCount}
                                     handlePageChange={this.handlePageChange}/>
            </React.Fragment>
        )
    }
}
