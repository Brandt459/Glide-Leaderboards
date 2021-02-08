import React from 'react'
import Map from './Map'
import '../css/maps.css'

export default function Maps(props) {
    return (
        <div className="maps">
            <Map map="cavern" props={props} />
            <Map map="kraken" props={props} />
            <Map map="yeti" props={props} />
            <Map map="dragon" props={props} />
            <Map map="temple" props={props} />
            <Map map="shrunk" props={props} />
            <Map map="mobs" props={props} />
            <Map map="body" props={props} />
            <Map map="canyon" props={props} />
            <Map map="excalibur" props={props} />
            <Map map="icarus" props={props} />
            <Map map="celts" props={props} />
        </div>
    )
}
