/*
 * @Author: Letmeouted
 * @Email: 1002726239@qq.com
 * @Date: 2021-01-20 09:58:07
 * @LastEditTime: 2021-01-20 10:33:51
 * @FilePath: \react-todo\src\components\ToDoItem.js
 */
import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {

    render() {
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{this.props.item}</p>
                <button className="ToDoItem-Delete"
                    onClick={this.props.deleteItem}>-
                </button>
            </div>
        );
    }
}

export default ToDoItem;