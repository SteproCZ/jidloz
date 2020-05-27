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
            title: "",
            activePage: 0,
            totalPages: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 0,
            pageSize: 5
        }
    }

    componentDidMount() {
        this.fetchList(this.state.activePage);
        this.setState({
            title: this.props.isUser ? "My Reservations" : "Waiting to be picked up"
        })
    }

    fetchList = async (page) => {
        let url, body;
        if (this.props.isUser) {
            url = 'http://localhost:8080/getAllByIdUserWithAddress';
        } else {
            url = 'http://localhost:8080/getAllByIdProducerWithAddress';
        }
        url += '?page=' + page + '&size=' + this.state.pageSize;

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
        let url = 'http://localhost:8080/statisticIncrementation';
        FetchUtil.fetchPost(url, food.category)
            .then();
    }

    onClickCancel = async (indexFood) => {
        let url = 'http://localhost:8080/unReserveFood';
        const food = this.state.reservations[indexFood];
        food.idUser = 0;
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
            <div className="d-flex justify-content-center">
                <div className="card m-3">
                    <h2 className="card-header">{this.state.title}</h2>
                    <div className="card-body row">

                        {this.props.isUser === true ?
                            <ReservationComponent isUser={true} reservations={this.state.reservations}
                                                  onClickCancel={this.onClickCancel}/>
                            :
                            <ReservationComponent isUser={false} reservations={this.state.reservations}
                                                  onClickDone={this.onClickDone}/>
                        }

                    </div>
                    <PaginationComponent activePage={this.state.activePage}
                                         itemsCountPerPage={this.state.itemsCountPerPage}
                                         totalItemsCount={this.state.totalItemsCount}
                                         handlePageChange={this.handlePageChange}/>
                </div>
            </div>


        )
    }
}
