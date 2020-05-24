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
        let url = 'http://localhost:8080/getAllByIdUserWithAddress?page=' + page + '&size=' + this.state.page.pageSize;
        let body = LoggedProfile.getIdUser();

        await FetchUtil.fetchPost(url, body)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    reservations: data.content,
                    totalPages: data.totalPages,
                    itemsCountPerPage: data.size,
                    totalItemsCount: data.totalElements
                })
            );
    }

    onClickDone = async (id) => {
        let url = 'http://localhost:8080/removeFoodById';
        await FetchUtil.fetchPost(url, id)
            .then(value => this.fetchList(this.state.page.activePage));
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
