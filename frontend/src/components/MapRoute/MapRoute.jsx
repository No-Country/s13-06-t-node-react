import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_API_URL = 'https://api.mapbox.com/directions/v5/mapbox/driving';

// Tu token de acceso de Mapbox.
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapRoute = ({ origin, destination }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Inicializa el mapa.
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12', // estilo del mapa
      center: origin, // centra el mapa en el origen
      zoom: 11
    });

    // Agrega controles de zoom y rotación al mapa.
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('load', async () => {
      // Construye la URL para la solicitud a la API de Directions de Mapbox
      const query = await fetch(
        `${MAPBOX_API_URL}/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
      );
      const json = await query.json();
      const data = json.routes[0];
      const route = data.geometry.coordinates;

      // Agrega el punto de origen al mapa
      map.addSource('origin', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: origin
          }
        }
      });

      map.addLayer({
        id: 'origin',
        type: 'circle',
        source: 'origin',
        paint: {
          'circle-radius': 9,
          'circle-color': '#D97706'
        }
      });

      // Agrega el punto de destino al mapa
      map.addSource('destination', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: destination
          }
        }
      });

      map.addLayer({
        id: 'destination',
        type: 'circle',
        source: 'destination',
        paint: {
          'circle-radius': 9,
          'circle-color': '#D97706'
        }
      });

      // Añade la ruta como una capa en el mapa
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        }
      });

      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#D97706',
          'line-width': 8
        }
      });

      // Calcula los límites de la ruta para ajustar el mapa
      const bounds = route.reduce(
        (bounds, coord) => {
          return bounds.extend(coord);
        },
        new mapboxgl.LngLatBounds(route[0], route[0])
      );

      map.fitBounds(bounds, {
        padding: 60, // Ajusta el relleno en píxeles alrededor de los límites.
        maxZoom: 15, // Establece un zoom máximo para cuando se ajuste.
        duration: 2000 // Establece la duración de la animación de ajuste en milisegundos.
      });
    });

    // Limpieza al desmontar el componente
    return () => map.remove();
  }, [origin, destination]); // Dependencias del efecto

  return (
    <div
      ref={mapContainerRef}
      className='w-full h-[420px] rounded-lg shadow-lg overflow-hidden'
    />
  );
};

MapRoute.propTypes = {
  origin: PropTypes.arrayOf(PropTypes.number).isRequired,
  destination: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default MapRoute;
