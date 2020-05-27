import React from 'react';
import {Food} from "./Food";

export class FoodComponent extends React.Component {
    render() {
        return (
            this.props.listFood.map((value, index) =>
                <div className="card m-3" key={index}>
                    <div className="card-body">
                    <Food key={index} name={value.name} description={value.description} price={value.price}/>
                    {this.props.isUser === true ?
                        <button className="btn btn-success btn-block" onClick={() => this.props.onClickReserve(index)}>Reserve</button>
                        :
                        <button className="btn btn-danger btn-block" onClick={() => this.props.onButtonRemove(value.id)}>Remove</button>
                    }
                    </div>
                </div>
            )
        )
    }
}
