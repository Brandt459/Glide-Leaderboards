import React, { Component } from 'react'
import '../css/rankings.css'

export default class Rankings extends Component {
    constructor() {
        super()
        this.state = {
            rankings: null
        }
    }

    componentDidMount() {
        fetch('/api/rankings/')
            .then(res => res.json())
            .then(data => this.setState({ rankings: data }))
    }

    render() {
        const rankings = this.state.rankings
        try {
            return (
                <div className="rankings">
                    <div className="row header">
                        <p className="rank">#</p>
                        {/* <div className="country-container-grid-element">
                            <div className="country-container">
                                <p>Ctry</p>
                            </div>
                        </div> */}
                        <p className="player">Player</p>
                        <p className="map">Cavern</p>
                        <p className="map">Kraken</p>
                        <p className="map">Yeti</p>
                        <p className="map">Dragon</p>
                        <p className="map">Temple</p>
                        <p className="map">Shrunk</p>
                        <p className="map">Mobs</p>
                        <p className="map">Body</p>
                        <p className="map">Canyon</p>
                        <p className="map">Excalibur</p>
                        <p className="map">Icarus</p>
                        <p className="map">Celts</p>
                        <p className="map">Average</p>
                    </div>
                    {rankings.map((row, index) => {
                        return (
                            <div className={`row ${row['username'] === localStorage.getItem('user') ? "row-active" : ""}`}>
                                <p className="rank">{index + 1}</p>
                                {/* countryflags.io not working currently
                                {row['country'] &&
                                    <div className="country-container-grid-element">
                                        <div className="country-container">
                                            <img className="country" src={`https://www.countryflags.io/${row['country']}/shiny/24.png`} />
                                        </div>
                                    </div>
                                } */}
                                <p className="player">{row['username']}</p>
                                {row['cavern'] ?
                                    <p className="map">{row['cavern']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['kraken'] ?
                                    <p className="map">{row['kraken']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['yeti'] ?
                                    <p className="map">{row['yeti']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['dragon'] ?
                                    <p className="map">{row['dragon']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['temple'] ?
                                    <p className="map">{row['temple']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['shrunk'] ?
                                    <p className="map">{row['shrunk']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['mobs'] ?
                                    <p className="map">{row['mobs']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['body'] ?
                                    <p className="map">{row['body']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['canyon'] ?
                                    <p className="map">{row['canyon']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['excalibur'] ?
                                    <p className="map">{row['excalibur']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['icarus'] ?
                                    <p className="map">{row['icarus']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['celts'] ?
                                    <p className="map">{row['celts']}</p>
                                    :
                                    <p className="map"></p>
                                }
                                {row['average'] ?
                                    <p className="map average">{row['average']}</p>
                                    :
                                    <p className="map average"></p>
                                }
                            </div>
                        )
                    })}
                </div>
            )
        } catch {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}
