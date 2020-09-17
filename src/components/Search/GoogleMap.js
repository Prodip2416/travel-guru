import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Search.css';

const GoogleMap = (props) => {
    const { latitude, longitude } = props.mapData;
    return (
            <Map className="map-border mt-5" google={props.google} zoom={14} initialCenter={{
                lat: latitude,
                lng: longitude
            }}>
                <Marker onClick={props.onMarkerClick}
                    name={'Current location'} />
            </Map>
    )
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDgUfbWNcMwZ4vwz9STUH36J8aPYtsRQwA")
})(GoogleMap);


// AIzaSyDgUfbWNcMwZ4vwz9STUH36J8aPYtsRQwA