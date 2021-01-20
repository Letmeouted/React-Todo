/*
 * @Author: Letmeouted
 * @Email: 1002726239@qq.com
 * @Date: 2021-01-20 09:07:49
 * @LastEditTime: 2021-01-20 10:32:27
 * @FilePath: \react-todo\src\ToDo.js
 */
import React from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './logo.png';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // this is where the data goes
            list: [
                {
                    'todo': 'clean the house'
                },
                {
                    'todo': 'buy milk'
                }
            ],
            todo: ''
        };
    };

    createNewToDoItem = () => {
        this.setState(({ list, todo }) => ({
            list: [
                ...list,
                {
                    todo
                }
            ],
            todo: ''
        }));
    };


    handleKeyPress = e => {
        if (e.target.value !== ' ') {
            if (e.key === 'Enter') {
                this.createNewToDoItem();
            }
        }
    };

    handleInput = e => {
        this.setState({
            todo: e.target.value
        });
    };


    // this is now being emitted back to the parent from the child component
    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
            list: list.filter((toDo, index) => index !== indexToDelete)
        }));
    };


    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo" />
                <h1 className="ToDo-Header">React To Do</h1>
                <div className="ToDo-Container">
                    <div className="ToDo-Content">
                        {this.state.list.map((item, key) => {
                            return <ToDoItem
                                key={key}
                                item={item.todo}
                                deleteItem={this.deleteItem.bind(this, key)}
                            />
                        }
                        )}
                    </div>

                    <div>
                        <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
                        <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;