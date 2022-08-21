import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleCheckAll = (event) => {
        console.log(this.props)
        this.props.handleCheckAll(event.target.checked)
    }
    deleteAllDone = () => {
        this.props.deleteAllDone()
    }
    render() {
        const { todos, handleCheckAll } = this.props
        // 已完成的个数
        // const doneCount = (todos) => {
        //     let count
        //     for (const todo of todos) {
        //         if (todo.done === true) count += 1
        //         return count
        //     }
        const doneCount = todos.reduce(
            (pre, todo) => pre + (todo.done ? 1 : 0),
            0
        )
        console.log(doneCount)
        // 总数
        const totalTodos = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        onChange={this.handleCheckAll}
                        checked={
                            doneCount === totalTodos && totalTodos !== 0
                                ? true
                                : false
                        }
                    />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{totalTodos}
                </span>
                <button onClick={this.deleteAllDone} className="btn btn-danger">
                    清除已完成任务
                </button>
            </div>
        )
    }
}
// input的checked and defaultChecked有个坑，defaultChecked只是在第一次的时候有作用，之后没有作用来了
// checked是可以一直有作用的
