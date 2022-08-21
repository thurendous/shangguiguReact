// 创建类式组件
import React from 'react'
import Hello from './components/Hello' // 这里因为取名去了index在子文件夹中，所以我们可以直接这么写！方便。不说就是index文件咯
import Welcome from './components/Welcome'
// 为了区别组件和一般的js文件，我们首先：
// 1. 首字母大写！2.把组件文件写成一个jsx文件！
// 这里我们注意的是，如果写的是js或jsx的话，不用写后缀

// 创建并且直接暴露App
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Hello />
            </div>
        )
    }
}

// 暴露App组件！
// export default App
// 这里可以是分别暴露，也可以是默认暴露，因为只是造了一个零件，够了
