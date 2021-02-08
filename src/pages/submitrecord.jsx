import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import '../css/submitrecord.css'

export default class submitpb extends Component {
    constructor() {
        super()
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const re1 = new RegExp('^[1-9][:][0-5][0-9][.][0-9][0-9][0-9]$')
        const re2 = new RegExp('^5[0-9][.][0-9][0-9][0-9]$')
        const time = this.state.time
        const map = this.state.map
        this.setState({
            success: null
        })
        this.setState({
            error: null
        })
        if (time) {
            if (map) {
                if (re1.test(time) || re2.test(time)) {
                    fetch('/api/submit_record/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            "username": localStorage.getItem('user'),
                            "user": localStorage.getItem('userId'),
                            "map": map,
                            "time": time,
                        })
                    })
                    document.getElementById('time').value = ''
                    this.setState({
                        success: `Updated ${map} record`
                    })
                } else {
                    this.setState({
                        error: 'Invalid time'
                    })
                }
            } else {
                this.setState({
                    error: 'Select a map'
                })
            }
        } else {
            this.setState({
                error: 'Enter a time'
            })
        }
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="submit-record-container">
                    <h1 className="record-form-header">Submit Record</h1>
                    {this.state.error &&
                        <h2 className="record-error">{this.state.error}</h2>
                    }
                    {this.state.success &&
                        <h2 className="record-success">{this.state.success}</h2>
                    }
                    <div className="form-container">
                        <form onSubmit={this.handleSubmit} className="record-form">
                            <div className="record-form-inputs">
                                <select onChange={this.handleChange} name="map">
                                    <option value="" disabled selected>Select map</option>
                                    <option value="body">Body</option>
                                    <option value="canyon">Canyon</option>
                                    <option value="cavern">Cavern</option>
                                    <option value="celts">Celts</option>
                                    <option value="dragon">Dragon</option>
                                    <option value="excalibur">Excalibur</option>
                                    <option value="icarus">Icarus</option>
                                    <option value="kraken">Kraken</option>
                                    <option value="mobs">Mobs</option>
                                    <option value="shrunk">Shrunk</option>
                                    <option value="temple">Temple</option>
                                    <option value="yeti">Yeti</option>
                                </select>
                                <input type="text" name="time" id="time" onChange={this.handleChange} placeholder="Time" />
                            </div>
                            <input className="record-form-submit" type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
