import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    //
    state = { mouse: false }
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    handleCheck = (id) => {
        return (event) => {
            const { checked } = event.target
            // console.log(id, event.target.checked)
            this.props.updateTodo(id, checked)
        }
    }

    handleDelete = (id) => {
        // 删除的时候
        if (window.confirm('Are you sure you want to delete')) {
            console.log(id)
            this.props.handleDelete(id)
        }
    }

    render() {
        const todo = this.props
        const { mouse } = this.state
        // const { id, name, done } = this.props
        return (
            <li
                style={{
                    backgroundColor: mouse ? '#ddd' : 'white',
                }}
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}
            >
                <label>
                    <input
                        type="checkbox" /* input改成了checkbox所以不能去拿value值了*/
                        checked={todo.done}
                        onChange={this.handleCheck(todo.id)}
                    />
                    {/* 这里的话，选这个就好，*/}
                    <span>{todo.name}</span>
                </label>
                <button
                    onClick={() => {
                        this.handleDelete(todo.id)
                    }}
                    className="btn btn-danger"
                    style={{ display: mouse ? 'block' : 'none' }}
                >
                    删除
                </button>
            </li>
        )
    }
}
