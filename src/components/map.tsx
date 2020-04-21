import React, { useState, useRef, useEffect } from 'react';
import useSwr from 'swr'
import { CheckBox } from './checkbox'
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components'
import mapboxgl from "mapbox-gl"
import geoViewport from '@mapbox/geo-viewport'


export const Map = ({
    width,
    height,
    zoom,
    center,
    bounds,
    padding,
    styles,
    mapStyle,
    sources,
    layers,
    minZoom,
    maxZoom
}) => {


    const mapNode = useRef(null)
    const mapRef = useRef(null)

    useEffect(() => {
        let mapCenter = center
        let mapZoom = zoom


        mapboxgl.accessToken = 'pk.eyJ1IjoidHBpZXJzYSIsImEiOiJjaWp1ZzVjNGkwZmU3dTdtOHJmYTZncmJoIn0.8-K2nTXJ7lr4afCulpm39w'

        const map = new mapboxgl.Map({
            container: mapNode.current,
            style: `mapbox://styles/${mapStyle}`,
            center: center,
            zoom: zoom
        })
        mapRef.current = map
        // window.map = map // for easier debugging and querying via console

        map.addControl(new mapboxgl.NavigationControl(), 'top-right')


        map.on('load', () => {
            console.log('map onload')
            // add sources
            Object.entries(sources).forEach(([id, source]) => {
                map.addSource(id, source)
            })

            // add layers
            layers.forEach(layer => {
                map.addLayer(layer)
            })
        })

        return () => {
            map.remove()
        }

    }, [])


    return (

        <div ref={mapNode} style={{ width: '100%', height: '100%' }} />

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

