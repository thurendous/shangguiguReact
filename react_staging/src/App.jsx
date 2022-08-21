import React, { Component } from 'react'
import './App.css'
// 第三方的包往上考，自己的包往下靠
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
    // 状态在哪里，操作状态的方法也得在那里！
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
    // 用于更新一个todo对象
    updateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else {
                return todoObj
            }
        })
        // 更新我们的state
        this.setState({ todos: newTodos })
    }

    deleteTodo = (id) => {
        // 获取原来的todos
        const { todos } = this.state
        // 删除指定的id的对象
        const newTodos = todos.filter((todo) => todo.id !== id)
        // 更新状态
        this.setState({ todos: newTodos })
    }

    // checkalltodo用于全选todo的条目
    handleCheckAllTodo = (done) => {
        let { todos } = this.state
        const newTodos = todos.map((todo) => {
            return { ...todo, done }
        })
        this.setState({ todos: newTodos })
    }

    // 清除所有已经完成的
    deleteAllDone = () => {
        const { todos } = this.state

        const newTodos = todos.filter((todo) => {
            return !todo.done
        })
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List
                        b={2}
                        todos={todos}
                        updateTodo={this.updateTodo}
                        handleDelete={this.deleteTodo}
                    />
                    <Footer
                        todos={todos}
                        handleCheckAll={this.handleCheckAllTodo}
                        deleteAllDone={this.deleteAllDone}
                    />
                </div>
            </div>
        )
    }
}
