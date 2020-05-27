import React, {Component} from 'react';
import PublicService from "../service/PublicService";
import {Pie} from "react-chartjs-2";

export class Graph extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {},
            statistics: {}
        }
    }

    async componentDidMount() {
        const graphData = {
            labels: [],
            datasets: [
                {
                    label: 'Population',
                    data: [],
                    backgroundColor: [
                        'rgba(200, 200, 230, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(75, 230, 150, 0.8)'
                    ]
                }
            ]
        }

        await PublicService.getStatInfo().then(res => {
            this.setState({
                statistics: res.data
            })
        });

        await this.state.statistics.forEach(value => {
            graphData.labels.push(value.category);
            graphData.datasets[0].data.push(value.number)
        });

        await this.setState({
            chartData: graphData
        })
    }

    method() {
        PublicService.getStatInfo().then(res => {
            this.setState({
                statistics: res.data
            })
        });
    }


    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="card w-75 m-5">
                    <div className="card-body">
                        <Pie
                            data={this.state.chartData}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Most traded with ' + this.props.category,
                                    fontSize: 40
                                },
                                legend: {
                                    position: this.props.legendPosition,
                                    labels: {
                                        boxWidth: 20
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

