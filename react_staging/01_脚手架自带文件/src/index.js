import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        {/* 包裹的这个是检查我们写的app里边是不是合理的，比如不能写什么ref等于字符串的啥的 */}
        <App />
    </React.StrictMode>
)

// 这里不用这样的了
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
