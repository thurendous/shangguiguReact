import hello from './index.module.css'
import React, { Component } from 'react'

export default class Hello extends Component {
    render() {
        return (
            <div className={hello.title}>
                <h3 className="titlebar"> Hello World! </h3>
            </div>
        )
    }
}
