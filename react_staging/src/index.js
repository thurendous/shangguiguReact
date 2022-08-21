// 引入react核心库
import React from 'react'

// 引入reactdom
import ReactDOM from 'react-dom'

// 渲染
import App from './App'

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
