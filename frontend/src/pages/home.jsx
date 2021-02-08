import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Maps from '../components/Maps'
import '../css/home.css'

export default function home() {
    return (
        <div>
            <Navbar />
            <Maps leaderboard />
        </div>
    )
}
