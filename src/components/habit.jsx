import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    handleIncrement= () =>{
        //state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 함.
        //state를 업데이트할 때는 리액트에서 제공하는 setState라는 함수를 호출해줘야 한다. 그래서 부분적으로 데이터 업데이트 할 수 없고 전체적인 state를 업데이트 해줘야한다.
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement= () =>{
        this.props.onDecrement(this.props.habit);
    };

    
    handleDelete = () =>{
        this.props.onDelete(this.props.habit);
    };

    render() {
        console.log(this.props.habit);
        const { name, count } = this.props.habit;
        return( 
            <li className = "habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className ="habit-button habit-increase" onClick = {this.handleIncrement}>
                    <i className="fa fa-plus-square" aria-hidden="true"></i>
                </button>
                <button className ="habit-button habit-decrease"  onClick = {this.handleDecrement}>
                    <i className="fa fa-minus-square" aria-hidden="true"></i>
                </button>
                <button className ="habit-button habit-delete" onClick = {this.handleDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </li>
            
        )
    }
}

export default Habit;