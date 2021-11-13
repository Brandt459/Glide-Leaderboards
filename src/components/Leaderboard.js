import React, { Component } from 'react'
import '../css/leaderboards.css'

export default class Leaderboard extends Component {
    constructor(props) {
        super()
        this.state = {
            rows: [],
            data: [],
            resultsStartIndex: 0,
            resultsEndIndex: 10,
            resultsPerRender: 10,
        }
        this.getRows = this.getRows.bind(this)
    }

    componentDidMount() {
        fetch(`/api/map/${this.props.map}/`)
            .then(response => response.json())
            .then(data => {
                this.getRows(data)
                this.setState({
                    data: data
                })
            })
    }

    getRows(data) {
        this.setState((prevState) => ({
            rows: prevState.rows.concat(data.slice(prevState.resultsStartIndex, prevState.resultsEndIndex)),
            resultsStartIndex: prevState.resultsStartIndex + prevState.resultsPerRender,
            resultsEndIndex: prevState.resultsEndIndex + prevState.resultsPerRender
        }))
    }

    render() {
        const rows = this.state.rows
        const map = this.props.map
        const data = this.state.data
        return (
            <div className="leaderboard">
                {rows.map((row, index) => {
                    if (row[map]) {
                        return (
                            <div className={`row ${row['username'] === localStorage.getItem('user') ? "row-active" : ""}`}>
                                <p className="rank">{index + 1}</p>
                                {/* {row['country'] &&
                                    <div className="country-container-grid-element">
                                        <div className="country-container">
                                            <img className="country" src={`https://www.countryflags.io/${row['country']}/shiny/24.png`} />
                                        </div>
                                    </div>
                                } */}
                                <p className="player">{row['username']}</p>
                                <p className="time">{row[map]}</p>
                            </div>
                        )
                    }
                })}
                {!(rows.length === data.length) &&
                    <button className="load-times" onClick={() => this.getRows(data)}><i class="arrow-down" /></button>
                }
            </div>
        )
    }
}
