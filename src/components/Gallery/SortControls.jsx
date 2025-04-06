import React from 'react';

const SortControls = ({ sortOrder, onChangeSortOrder }) => {
  const buttonStyle = (isActive) => ({
    backgroundColor: isActive ? '#e4cb86' : 'transparent',
    color: isActive ? '#000' : '#e4cb86',
    border: '2px solid #e4cb86',
    padding: '8px 15px',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '0.8rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  });

  return (
    <div className="sort-controls mb-6 flex justify-end">
      <div className="inline-flex rounded-md">
        <button
          type="button"
          style={{
            ...buttonStyle(sortOrder === 'newest'),
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 'none'
          }}
          onClick={() => onChangeSortOrder('newest')}
        >
          Más recientes
        </button>
        <button
          type="button"
          style={{
            ...buttonStyle(sortOrder === 'oldest'),
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
          onClick={() => onChangeSortOrder('oldest')}
        >
          Más antiguas
        </button>
      </div>
    </div>
  );
};

export default SortControls;