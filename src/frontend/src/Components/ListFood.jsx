import React from 'react';
import {Food} from "./Food";


export class ListFood extends React.Component {
    constructor() {
        super();
        this.state = {
            listFood: []
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        };
        fetch('http://localhost:8080/getAllFood', requestOptions)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    listFood: data
                }));
    }

    onChangeHandler = (evt, key) => {
        this.setState({[key]: evt.target.value})
    }

    onButtonReserve() {
        return function (p1: React.MouseEvent<HTMLButtonElement>) {
        };
    }

    render() {
        return (
            <React.Fragment>
                <h3>All Food</h3>
                {this.state.listFood.map((value, index) =>
                    <div key={index}>
                        <Food key={index} name={value.name} description={value.description} price={value.price}/>
                        <button onClick={this.onButtonReserve()}>Reserve</button>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
