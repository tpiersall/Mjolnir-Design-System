import React, { useState, useRef, useEffect } from 'react';
import useSwr from 'swr'
import { CheckBox } from './checkbox'
import ReactMapGL, { Marker, NavigationControl, GeolocateControl, Layer, Source } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components'

// const fetcher = (...args) => fetch(...args).then(response => response.json())

const INITIAL_VIEWPORT = {
    latitude: 33.167,
    longitude: -98.840,
    width: window.innerWidth,
    height: window.innerHeight,
    zoom: 15,
}

export const Map = () => {

    const [viewport, setViewport] = useState(INITIAL_VIEWPORT)
    const [userPosition, setUserPosition] = useState(null)
    const [layerToggle, setLayerToggle] = useState(false)
    const [color, setColor] = useState('#000')


    useEffect(() => {
        function handleResize() {
            setViewport({ ...viewport, width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })



    const mapRef = useRef();

    // const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    // const { data, error } = useSwr(url, fetcher)
    // const crimes = data && !error ? data.slice(0, 1000) : [];

    const handleColor = (e) => {
        setColor(e.target.value)
    }
    const toggleLayer = () => {
        setLayerToggle(!layerToggle)
    }



    return (

        <ReactMapGL
            width="100%"
            height="100%"
            {...viewport}
            mapboxApiAccessToken='pk.eyJ1IjoidHBpZXJzYSIsImEiOiJjaWp1ZzVjNGkwZmU3dTdtOHJmYTZncmJoIn0.8-K2nTXJ7lr4afCulpm39w'
            onViewportChange={(newViewport) => setViewport(newViewport)}
        >
            <div style={{ position: 'absolute', left: 16, top: 16 }}>

                <NavigationControl />
            </div>
            <MapLegend>
                <CheckBox labelPosition="left" onClick={toggleLayer}>Contours</CheckBox>
                <input type="color" onChange={handleColor} />
            </MapLegend>
            <Source id="contours" type="vector" url="mapbox://mapbox.mapbox-terrain-v2" />
            <Layer
                id="contours"
                type="line"
                source="contours"
                source-layer="contour"
                paint={{
                    'line-color': `${color}`,
                    'line-width': 1
                }}
                layout={{
                    'visibility': `${layerToggle ? 'visible' : 'none'}`
                }}
            />

        </ReactMapGL>
    )
}

const MapLegend = styled.div`
    position: absolute;
    right: 16px;
    top: 16px;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
`

