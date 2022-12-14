import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    // 对接受的props进行类型和必要性的限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
    }
    render() {
        const { todos, updateTodo, handleDelete } = this.props
        // console.log(this.props.b)
        return (
            <ul className="todo-main">
                {todos.map((todo) => {
                    return (
                        <Item
                            key={todo.id}
                            {...todo}
                            updateTodo={updateTodo}
                            handleDelete={handleDelete}
                        />
                    )
                })}
            </ul>
        )
    }
}
