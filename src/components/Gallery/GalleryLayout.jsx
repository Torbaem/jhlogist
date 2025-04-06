import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import GalleryGrid from './GalleryGrid';
import SortControls from './SortControls';

const categories = [
  { id: 'bodas', name: 'Bodas' },
  { id: '15anos', name: '15 Años' },
  { id: 'corporativo', name: 'Eventos Corporativos' },
  { id: 'infantil', name: 'Fiestas Infantiles' },
  { id: 'social', name: 'Eventos Sociales' }
];

const GalleryLayout = () => {
  const [activeCategory, setActiveCategory] = useState('bodas');
  const [sortOrder, setSortOrder] = useState('newest');

  return (
    <div className="gallery-container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#e4cb86' }}>
        Nuestro Portafolio
      </h1>
      
      <div className="separator" style={{ width: '100px', height: '2px', backgroundColor: '#e4cb86', margin: '0 auto 30px' }}></div>
      
      <CategorySelector 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />
      
      <SortControls 
        sortOrder={sortOrder} 
        onChangeSortOrder={setSortOrder} 
      />
      
      <GalleryGrid 
        category={activeCategory} 
        sortOrder={sortOrder} 
      />
    </div>
  );
};

export default GalleryLayout;