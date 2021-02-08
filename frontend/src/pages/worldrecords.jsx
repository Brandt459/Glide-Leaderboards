import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Maps from '../components/Maps'

export default class worldrecords extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Maps worldrecord />
            </div>
        )
    }
}
