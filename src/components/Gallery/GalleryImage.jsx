import React, { useState } from 'react';

const GalleryImage = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Usar la primera imagen como miniatura principal
  const thumbnailImage = event.images[0];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div 
        className="gallery-item overflow-hidden cursor-pointer transition-shadow"
        onClick={() => setIsOpen(true)}
        style={{
          borderRadius: '5px',
          border: '1px solid rgba(228, 203, 134, 0.3)',
          backgroundColor: '#222',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="relative"style={{ height: '225px', overflow: 'hidden' }}>
          <img 
            src={thumbnailImage.src} 
            alt={event.title} 
             className="w-full h-full object-cover"
          />
          {event.images.length > 1 && (
            <div 
              className="absolute bottom-3 right-3 px-2 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <rect x="2" y="2" width="13" height="13" rx="2" ry="2"></rect>
              </svg>
              {event.images.length}
            </div>
          )}
        </div>
        <div className="p-3" style={{ backgroundColor: '#222' }}>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: '#e4cb86', fontSize: '1.3rem' }}>
            {event.title}
          </h3>
          <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '0.9rem', color: '#ccc' }}>
            {formatDate(event.date)}
          </p>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4" 
          onClick={() => setIsOpen(false)}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999
          }}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#222',
              border: '1px solid rgba(228, 203, 134, 0.3)',
              borderRadius: '5px',
              padding: '40px',
              margin: '40px auto',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
              maxHeight: '100vh',
              overflowY: 'auto'
            }}
          >
            <button 
              className="absolute top-4 right-4 p-2 rounded-full"
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#e4cb86',
                transition: 'color 0.3s ease',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.backgroundColor = 'rgba(228, 203, 134, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#e4cb86';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="relative">
              <img 
                src={event.images[currentImageIndex].src} 
                alt={event.images[currentImageIndex].alt} 
                className="max-h-[60vh] mx-auto"
                style={{ borderRadius: '5px' }}
              />
              
              {event.images.length > 1 && (
                <>
                  <button 
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full"
                    onClick={handlePrev}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: '#e4cb86',
                      border: 'none',
                      cursor: 'pointer',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
                  <button 
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full"
                    onClick={handleNext}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: '#e4cb86',
                      border: 'none',
                      cursor: 'pointer',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}

              {event.images.length > 1 && (
                <div className="flex justify-center mt-4 gap-2">
                  {event.images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: currentImageIndex === index ? '#e4cb86' : '#555',
                        border: 'none',
                        padding: '0',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div style={{ padding: '15px 0' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', color: '#e4cb86', textAlign: 'center', marginBottom: '10px' }}>
                {event.title}
              </h2>
              <div style={{ width: '100px', height: '2px', backgroundColor: '#e4cb86', margin: '0 auto 15px' }}></div>
              <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '1rem', color: '#ccc', textAlign: 'center' }}>
                {formatDate(event.date)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryImage;