import React, { useState, useEffect } from 'react';
import GalleryImage from './GalleryImage';

const GalleryGrid = ({ category, sortOrder }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        // Cargar el archivo de configuración de la galería desde una ubicación accesible públicamente
        const response = await fetch(`/data/gallery-config.json?v=${new Date().getTime()}`);
        if (!response.ok) {
          throw new Error('Error fetching gallery configuration');
        }
        
        const galleryData = await response.json();
        const fetchedEvents = galleryData[category] || [];
        
        const sortedEvents = [...fetchedEvents].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          
          return sortOrder === 'newest' 
            ? dateB - dateA  // Más recientes primero
            : dateA - dateB;  // Más antiguas primero
        });
        
        setEvents(sortedEvents);
      } catch (error) {
        console.error("Error cargando eventos:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchEvents();
  }, [category, sortOrder]);

  if (loading) {
    return (
      <div className="text-center py-10" style={{ fontFamily: '"Montserrat", sans-serif', color: '#ccc' }}>
        Cargando eventos...
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-10" style={{ fontFamily: '"Montserrat", sans-serif', color: '#ccc' }}>
        No hay eventos para mostrar en esta categoría.
      </div>
    );
  }

  return (
    <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {events.map(event => (
        <GalleryImage key={event.id} event={event} />
      ))}
    </div>
  );
};

export default GalleryGrid;