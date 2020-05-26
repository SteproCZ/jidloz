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
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
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
            <Pie
                data={this.state.chartData}
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'Largest Cities In '+this.props.location,
                        fontSize:50
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                }}
            />
        );
    }
}

