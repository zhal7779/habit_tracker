import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();//리액트 4.12 강의 참고, 리액트에 있는 createRef() 함수를 호출하면 Ref라는 오브젝트가 생기고,원하는 요소에 전달해주면 된다.
    onSubmit = (event) => {
        // event.preventDefault(); // Sumit이 발생되면 기본적으로 페이지가 리프레시가 발생되어 브라우저의 기본기능을 취소해준다. 
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value='';
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    className="add-input" 
                    placeholder="Present your habit!"/>
                {/* inpit이라는 요소가 위에 멤버변수 inputRef와 연결되어 요소에 접근해서 해당하는 데이터를 읽어 올 수 있다. */}
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;