import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Rankings from '../components/Rankings'
import Maps from '../components/Rankings'
import '../css/home.css'

export default function rankings() {
    return (
        <div>
            <Navbar />
            <Rankings />
        </div>
    )
}