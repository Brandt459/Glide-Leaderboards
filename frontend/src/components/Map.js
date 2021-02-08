import React, { Component } from 'react'
import cavern from '../images/cavern.png'
import kraken from '../images/kraken.png'
import yeti from '../images/yeti.png'
import dragon from '../images/dragon.png'
import temple from '../images/temple.png'
import shrunk from '../images/shrunk.png'
import mobs from '../images/mobs.png'
import body from '../images/body.png'
import canyon from '../images/canyon.png'
import excalibur from '../images/excalibur.png'
import icarus from '../images/icarus.png'
import celts from '../images/celts.png'
import Leaderboard from './Leaderboard'


export default class Map extends Component {
    constructor(props) {
        super()
        this.state = {
            images: {
                'cavern': cavern,
                'kraken': kraken,
                'yeti': yeti,
                'dragon': dragon,
                'temple': temple,
                'shrunk': shrunk,
                'mobs': mobs,
                'body': body,
                'canyon': canyon,
                'excalibur': excalibur,
                'icarus': icarus,
                'celts': celts
            }
        }
        this.getWorldRecords = this.getWorldRecords.bind(this)
    }

    componentDidMount() {
        if (this.props.props.worldrecord) {
            this.getWorldRecords()
        }
    }

    getWorldRecords() {
        fetch(`http://localhost:8000/api/world-records/${this.props.map}`)
            .then(res => res.json())
            .then(data => this.setState({ worldRecord: data[0] }))
    }

    render() {
        const map = this.props.map
        const images = this.state.images
        const record = this.state.worldRecord
        try {
            return (
                <div className="map-container-grid-element" id={map}>
                    <div className="map-container">
                        <div className="map">
                            <div className="map-image-container">
                                <img className="map-image" src={images[map]} alt={`${map} image`} />
                            </div>
                            <h1 className="map-name">{map.charAt(0).toUpperCase() + map.slice(1)}</h1>
                            {this.props.props.leaderboard &&
                                <Leaderboard map={map} />
                            }
                            {this.props.props.worldrecord &&
                                <p className="world-record-video-container"><iframe className="world-record-video" src={record['video']} /></p>
                            }
                        </div>
                    </div>
                </div>
            )
        } catch {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}
