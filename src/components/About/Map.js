import React, { useEffect } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls, ZoomSlider } from 'ol/control'; // Import controls
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Style, Icon } from 'ol/style';

function MapComponent() {
  useEffect(() => {
    const marker = new Feature({
      geometry: new Point(fromLonLat([-81.54776806459289, 28.86724308550944]))
    });

    const markerStyle = new Style({
      image: new Icon({
        src: 'https://openlayers.org/en/latest/examples/data/icon.png', // URL to your marker icon
        anchor: [0.5, 1], // Adjust anchor to your icon
      })
    });

    marker.setStyle(markerStyle);

    const vectorSource = new VectorSource({
      features: [marker]
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer // Add the vector layer to the map
      ],
      view: new View({
        center: fromLonLat([-81.54776806459289, 28.86724308550944]),
        zoom: 17
      }),
      controls: defaultControls().extend([
        new ZoomSlider()
      ]) // Add ZoomSlider control
    });

    return () => {
      if (map) {
        map.setTarget(null); // Cleanup on unmount
      }
    };
  }, []);

  return <div id="map" style={{ height: "30vh", width: "60vw" }}></div>;
}

export default MapComponent;
