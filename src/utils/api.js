import axios from 'axios';

const API_KEY = '43935608-6229d20c484d1512dae74c310';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&pretty=true`);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
