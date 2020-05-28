import React from 'react';
import {Food} from "./Food";

export class FoodComponent extends React.Component {
    render() {
        return (
            this.props.listFood.map((value, index) =>
                <div className="card m-3" key={index}>
                    <div className="card-body">
                        <Food key={index} name={value.name} description={value.description} price={value.price}/>
                        <button className={this.props.className}
                                onClick={() => this.props.onClickHandler(index, value.id)}>{this.props.text}</button>
                    </div>
                </div>
            )
        )
    }
}
