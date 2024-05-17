import React, { useEffect } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls, ZoomSlider } from 'ol/control'; // Import controls

function MapComponent() {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([-81.54776806459289,28.86724308550944  ]),
        zoom: 17
      }),
      controls: defaultControls()// Add controls
    });

    return () => map.setTarget(null); // Cleanup on unmount
  }, []);

  return <div id="map" style={{ height: "30vh", width: "60vw" }}></div>;
}

export default MapComponent;
