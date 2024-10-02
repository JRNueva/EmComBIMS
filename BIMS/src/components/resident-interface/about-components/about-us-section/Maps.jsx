import { useRef, useState, useEffect } from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

import zoomIn from '../../../../assets/resident-interface/icons/map/zoom-in.svg';
import zoomOut from '../../../../assets/resident-interface/icons/map/zoom-out.svg';

const MAX_ZOOM = 20;
const MIN_ZOOM = 1;

export default function Maps({ longitude, latitude }) {
  const mapElement = useRef(null);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapElement.current && longitude && latitude) {
      try {
        const mapInstance = tt.map({
          key: 'Gj4XlBrULogK1GCHL1Ul9hBGhHa7V7qp',
          container: mapElement.current,
          center: [longitude, latitude],
          zoom: mapZoom,
        });

        setMap(mapInstance);

        new tt.Marker()
          .setLngLat([longitude, latitude])
          .setPopup(new tt.Popup({ offset: 5 }).setHTML('<h1>Marker Location</h1>'))
          .addTo(mapInstance);

        return () => mapInstance.remove();
      } catch (error) {
        console.error('Error initializing the map:', error);
      }
    }
  }, [longitude, latitude, mapZoom]);

  useEffect(() => {
    if (map && longitude && latitude) {
      map.setCenter([longitude, latitude]);
      map.setZoom(mapZoom);
    }
  }, [longitude, latitude, mapZoom, map]);

  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(prevZoom => prevZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > MIN_ZOOM) {
      setMapZoom(prevZoom => prevZoom - 1);
    }
  };

  return (
    <div className="relative">
      {longitude && latitude ? (
        <>
          <div className="absolute bottom-4 left-4 flex flex-row items-center z-20">
            <button onClick={increaseZoom}>
              <img src={zoomIn} alt="Zoom In" className="h-10" />
            </button>
            <button onClick={decreaseZoom}>
              <img src={zoomOut} alt="Zoom Out" className="h-10" />
            </button>
          </div>

          <div ref={mapElement} className="w-full h-[30rem]" />
        </>
      ) : (
        <div className="w-full h-10 flex items-center justify-center">
          <p>Maps not available at the moment</p>
        </div>
      )}
    </div>
  );
}
