// 引入react核心库
import React, { component } from 'react'
// 引入reactdom
import ReactDOM from 'react-dom'
// 引入app组件，js是可以省略的，css啥的不行
import App from './App'
import { createRoot } from 'react-dom/client'

// 渲染app组件
// ReactDOM.render(<App />, document.getElementById('root'))

const root = createRoot(document.getElementById('root'))

root.render(
    <div>
        <App />
    </div>
)

// import React, { Component } from './module.js'
// console.log(React)
// console.log(Component)
