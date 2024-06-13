import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Mapa = () => {
    const mapStyles = {
        height: "400px",
        width: "100%"
    };

    const defaultCenter = {
        lat: -34.5956145,
        lng: -58.4431949
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Mapa;
