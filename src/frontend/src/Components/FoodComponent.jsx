import React from 'react';
import {Food} from "./Food";

export class FoodComponent extends React.Component {
    render() {
        return (
            this.props.listFood.map((value, index) =>
                <div key={index}>
                    <Food key={index} name={value.name} description={value.description} price={value.price}/>
                    <button onClick={(evt) => this.onButtonReserve(value.id)}>Reserve</button>
                </div>
            )
        )
    }
}
