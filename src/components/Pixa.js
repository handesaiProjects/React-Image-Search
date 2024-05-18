import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGrid from './ImageGrid';
import SearchForm from './SearchForm';
import './Pixa.css';
import { fetchImages } from '../utils/api';

const Pixa = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState(new URLSearchParams(location.search).get('s') || '');

  useEffect(() => {
    const getImages = async () => {
      if (searchTerm) {
        try {
          const fetchedImages = await fetchImages(searchTerm);
          setImages(fetchedImages);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }
    };
    getImages();
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div className="pixa-container">
      <SearchForm query={query} onInputChange={handleInputChange} onSearch={handleSearch} />
      <ImageGrid images={images} />
    </div>
  );
};

export default Pixa;
