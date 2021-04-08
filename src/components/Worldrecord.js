import React, { Component } from 'react'

export default class Worldrecord extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    componentDidMount() {
        fetch(`/api/world-records/${this.props.map}`)
            .then(res => res.json())
            .then(data => this.setState({ worldRecord: data[0] }))
    }

    render() {
        const record = this.state.worldRecord
        try {
            return (
                <div className="world-record">
                    <p className="world-record-video-container"><iframe className="world-record-video" src={record['video']} /></p>
                </div>
            )
        } catch {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}
