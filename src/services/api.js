import axios from 'axios';

const API_KEY = '32900750-5d55daf97b577b91954971888';
const BASE_URL = 'https://pixabay.com/api/';
const params = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchPhotosByKeyWord = async (query, pageNumber) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${query}&key=${API_KEY}&${params}&page=${pageNumber}`
  );

  return data;
};
