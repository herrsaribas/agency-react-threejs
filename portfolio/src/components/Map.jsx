import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2E0E57"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      <Marker coordinates={[9.0158, 48.4226]}>
        <text x="196" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"🇩🇪 We are in Stuttgart 🚀"}
        </text>
        <circle r={8} fill="#da4ea2" />
      </Marker>
    </ComposableMap>
  );
};

export default Map;
