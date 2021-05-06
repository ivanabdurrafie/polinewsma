import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>INI home</h1>
                <Footer/>
            </div>
        )
    }
}
