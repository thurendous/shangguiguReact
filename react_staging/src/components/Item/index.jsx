import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        const todo = this.props
        // const { id, name, done } = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" defaultChecked={todo.done} />
                    {/* 这里的话，选这个就好，*/}
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: 'none' }}>
                    删除
                </button>
            </li>
        )
    }
}
