import React, { Component } from 'react'
import './App.css'
// 第三方的包往上考，自己的包往下靠
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
    // 初始化状态
    state = {
        todos: [
            { id: '001', name: 'chifan', done: true },
            { id: '002', name: ' shuijiao', done: false },
            { id: '003', name: 'coding', done: false },
        ],
    }
    addTodo = (todoObj) => {
        // 获取原todos
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List b={2} todos={todos} />
                    <Footer />
                </div>
            </div>
        )
    }
}
