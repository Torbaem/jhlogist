// src/components/Gallery/CategorySelector.jsx
import React from 'react';

const CategorySelector = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="category-selector mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(category => (
          <button
            key={category.id}
            style={{
              backgroundColor: activeCategory === category.id ? '#e4cb86' : 'transparent',
              color: activeCategory === category.id ? '#000' : '#e4cb86',
              border: '2px solid #e4cb86',
              padding: '12px 25px',
              borderRadius: '3px',
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '0.9rem',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
