import React from 'react';
import {Food} from "./Food";

export class FoodComponent extends React.Component {
    render() {
        return (
            this.props.listFood.map((value, index) =>
                <div key={index}>
                    <Food key={index} name={value.name} description={value.description} price={value.price}/>
                    {this.props.isUser === true ?
                        <button onClick={() => this.props.onClickReserve(index)}>Reserve</button>
                        :
                        <React.Fragment>
                            <button onClick={() => this.props.onButtonRemove(value.id)}>Remove</button>
                        </React.Fragment>
                    }
                </div>
            )
        )
    }
}
