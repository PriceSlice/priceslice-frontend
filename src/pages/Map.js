import { React, useState, useEffect, useMemo, useContext } from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Marker, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import "../index.css";
import map from './features.json';
import Sidebar from '../Sidebar/Sidebar';
import Key from '../Key/Key';
import { GlobalContext } from "../context/GlobalContext";


export const getRandom = () => Math.random() * 0.8;


const markers = [
    { markerOffset: 5, name: "Tokyo", coordinates: [139.6917, 35.6895] },
    { markerOffset: 5, name: "New York", coordinates: [-74.0060, 40.7128] },
    { markerOffset: 5, name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
    { markerOffset: 5, name: "London", coordinates: [-0.1276, 51.5074] },
    { markerOffset: 5, name: "Paris", coordinates: [2.3522, 48.8566] },
    { markerOffset: 5, name: "Moscow", coordinates: [37.6173, 55.7558] },
    { markerOffset: 5, name: "Beijing", coordinates: [116.4074, 39.9042] },
    { markerOffset: 5, name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] },
    { markerOffset: 5, name: "Cairo", coordinates: [31.2357, 30.0444] },
    { markerOffset: 5, name: "Mumbai", coordinates: [72.8777, 19.0760] },
    { markerOffset: 5, name: "Mexico City", coordinates: [-99.1332, 19.4326] },
    { markerOffset: 5, name: "Sydney", coordinates: [151.2093, -33.8688] },
    { markerOffset: 5, name: "Istanbul", coordinates: [28.9784, 41.0082] },
    { markerOffset: 5, name: "Shanghai", coordinates: [121.4737, 31.2304] },
    { markerOffset: 5, name: "Bangkok", coordinates: [100.5018, 13.7563] },
    { markerOffset: 5, name: "Seoul", coordinates: [126.9780, 37.5665] },
    { markerOffset: 5, name: "Lagos", coordinates: [3.3792, 6.5244] },
    { markerOffset: 5, name: "Delhi", coordinates: [77.1025, 28.7041] },
    { markerOffset: 5, name: "Karachi", coordinates: [67.0099, 24.8607] },
    { markerOffset: 5, name: "São Paulo", coordinates: [-46.6333, -23.5505] },
    { markerOffset: 5, name: "Jakarta", coordinates: [106.8650, -6.2088] },
    { markerOffset: 5, name: "Kinshasa", coordinates: [15.2663, -4.4419] },
    { markerOffset: 5, name: "Lima", coordinates: [-77.0428, -12.0464] },
    { markerOffset: 5, name: "Bangalore", coordinates: [77.5946, 12.9716] },
    { markerOffset: 5, name: "Dhaka", coordinates: [90.4152, 23.8041] },
    { markerOffset: 5, name: "Bogotá", coordinates: [-74.0721, 4.7110] },
    { markerOffset: 5, name: "Lisbon", coordinates: [-9.1393, 38.7223] },
    { markerOffset: 5, name: "Dubai", coordinates: [55.2708, 25.2048] },
    { markerOffset: 5, name: "Madrid", coordinates: [-3.7038, 40.4168] },
    { markerOffset: 5, name: "Toronto", coordinates: [-79.3832, 43.6532] },
    { markerOffset: 5, name: "Miami", coordinates: [-80.1918, 25.7617] },
    { markerOffset: 5, name: "Osaka", coordinates: [135.5023, 34.6937] },
    { markerOffset: 5, name: "Singapore", coordinates: [103.8198, 1.3521] },
    { markerOffset: 5, name: "Hong Kong", coordinates: [114.1694, 22.3193] },
    { markerOffset: 5, name: "Riyadh", coordinates: [46.6753, 24.7136] },
    { markerOffset: 5, name: "Chicago", coordinates: [-87.6298, 41.8781] },
    { markerOffset: 5, name: "Houston", coordinates: [-95.3698, 29.7604] },
    { markerOffset: 5, name: "Berlin", coordinates: [13.4050, 52.5200] },
    { markerOffset: 5, name: "Taipei", coordinates: [121.5654, 25.0330] },
    { markerOffset: 5, name: "Kuala Lumpur", coordinates: [101.6869, 3.1390] },
    { markerOffset: 5, name: "Dallas", coordinates: [-96.7969, 32.7767] },
    { markerOffset: 5, name: "Ho Chi Minh City", coordinates: [106.6297, 10.8231] },
    { markerOffset: 5, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 5, name: "Philadelphia", coordinates: [-75.1652, 39.9526] },
    { markerOffset: 5, name: "Boston", coordinates: [-71.0589, 42.3601] }
];


const Map = () => {
    const { alphaValues } = useContext(GlobalContext);
    const [localAlphaValues, setLocalAlphaValues] = useState({});

    useEffect(() => {
        const fetchAlphaValues = async () => {
            try {
                const alphaValuesData = await alphaValues;
                setLocalAlphaValues(alphaValuesData);
            } catch (error) {
                console.error("Error fetching alpha values:", error);
            }
        };

        fetchAlphaValues();
    }, [alphaValues]);


    function formatAlphaValues(geo_name) {
        if (localAlphaValues.length === 0) {
            return 0;
        } else if (localAlphaValues === undefined) {
            return 0;
        } else if (localAlphaValues === null) {
            return 0;
        } else if (localAlphaValues[geo_name] === undefined) {
            return 0;
        } else if (localAlphaValues[geo_name] === null) {
            return 0;
        } else {
            return localAlphaValues[geo_name];
        }

    }
    return (
        <div>
            <ComposableMap
                projection="geoMercator"
            >
                <ZoomableGroup center={[0, 0]} zoom={1} translateExtent={[[-200, -200], [1000, 800]]}>
                    <Geographies geography={map}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <a key={geo.rsmKey} href={`/${geo.properties.name.trim()}`}>
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        title={geo.properties.name}
                                        fill={`rgb(42,53,77,${(formatAlphaValues(geo.properties.name)) + .2})`}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    >
                                        <title>{geo.properties.name}</title>
                                    </Geography>
                                </a>
                            ))
                        }
                    </Geographies>
                    {markers.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates}>
                            <circle r={1} fill="#000000" strokeWidth={1} />
                            <text
                                textAnchor="middle"
                                y={markerOffset}
                                style={{ fontFamily: "system-ui", fill: "#777777", "fontSize": ".2rem" }}
                            >
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
            <Sidebar />
            <Key />
        </div>
    )

};

export default Map;