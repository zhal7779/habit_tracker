
import { faRupiahSign } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        { id: 1,  name: 'Reading', count: 0},
        { id: 2, name: 'Running', count: 0},
        { id: 3, name: 'Coding', count: 0},
    ],
};

  handleIncrement = habit =>{
    const habits = this.state.habits.map(item =>{
      if (item.id === habit.id) {
        return {...habit, count : habit.count + 1};
      }
      return item;
    });  //...this 오퍼레이터를 이용하여 배열을 복사 habits 증가 시킨다.  
    this.setState({habits}); // {habits(state에 habits) : habits(handleIncrement에 들어있는 로컬변수 habits)}와 동일 
    //state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 함.
    //state를 업데이트할 때는 리액트에서 제공하는 setState라는 함수를 호출해줘야 한다. 그래서 부분적으로 데이터 업데이트 할 수 없고 전체적인 state를 업데이트 해줘야한다. 
    //그러나 리액트에서는 state(오브젝트)를 직접 수정하면 안된다! 
  };

  handleDecrement= habit =>{
      //...this (spred)오퍼레이터를 이용하여 배열을 복사
    const habits = this.state.habits.map(item =>{
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count};    // count가 0 보다 작다면 0이고, 아니면 count의 값을 사용한다.
      }
      return item;
    });
    this.setState({habits});
  };


  handleDelete = habit =>{
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({habits});
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(),name, count: 0}];  // 현재의시간을 이용한 고유한 아이디를 만들어준다, 밀리세컨드까지 포함되기때문에 아이디가 중복될 가능성이 거의 없다. 
    this.setState({habits});
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return {...habit, count: 0}
      }
      return habit;
    });
    this.setState({habits});
  };

  onRefreshPage = () => {
    window.location.reload();

  }
  render() {
    return (
      <>
        <Navbar  totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits 
          habits= {this.state.habits}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}
          onAdd = {this.handleAdd}
          onReset = {this.handleReset}
          refreshPage ={this.onRefreshPage}
        
        />
      </>
    );
  }
}

export default App;
