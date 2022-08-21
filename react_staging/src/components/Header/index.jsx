import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

// console.log(nanoid())

export default class Header extends Component {
    // 对接受的props进行类型和必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    }

    // 键盘事件的回调
    handleKeyUp = (event) => {
        // 解构赋值获取这俩人
        const { keyCode, target } = event
        // 判断是否是回车按键
        if (keyCode !== 13) return
        // 准备好一个todo对象
        console.log(event.target.value, event.keyCode)
        if (target.value.trim() === '') {
            alert('输入不能为空哦，亲爱的')
            return
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        // 清空
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input
                    onKeyUp={this.handleKeyUp}
                    type="text"
                    placeholder="请输入你的任务名称，按回车键确认"
                />
            </div>
        )
    }
}
