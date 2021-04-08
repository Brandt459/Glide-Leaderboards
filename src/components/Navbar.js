import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import logo from '../images/logo.png'

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            username: null,
            loggedIn: localStorage.getItem('token') ? true : false,
        }
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        if (this.state.loggedIn) {
            this.setState({
                username: localStorage.getItem('user')
            })
        }
    }

    handleLogout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('userId')
        this.setState({
            loggedIn: false,
            username: null,
        })
        window.location.reload(false)
    }

    render() {
        const username = this.state.username
        return (
            <nav>
                <Link to="/"><img className="logo" src={logo} alt="glide minigame logo" /></Link>
                <label for="toggle" id="toggle-label">&#9776;</label>
                <input type="checkbox" id="toggle" />
                {username ?
                    <ul>
                        <li className="li">{username}</li>
                        <Link className="li" to="/"><li>Leaderboards</li></Link>
                        <Link className="li" to="/world-records"><li>World Records</li></Link>
                        <Link className="li" to="/rankings"><li>Rankings</li></Link>
                        <Link className="li" to="/submit-record"><li>Submit Record</li></Link>
                        <Link className="li"><li onClick={this.handleLogout}>Log out</li></Link>
                    </ul>
                    :

                    <ul>
                        <Link className="li" to="/"><li>Leaderboards</li></Link>
                        <Link className="li" to="/world-records"><li>World Records</li></Link>
                        <Link className="li" to="/rankings"><li>Rankings</li></Link>
                        <Link className="li" to="/register"><li>Register</li></Link>
                        <Link className="li" to="/login"><li>Log in</li></Link>
                    </ul>
                }
            </nav>
        )
    }
}

export default Navbar