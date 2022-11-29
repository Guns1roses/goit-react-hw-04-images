import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '30238627-774da39921c55fc36cf8a4fe6';

export async function getImages(query, page) {
  const BASE_SEARH_PARAMS = {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
    q: query,
  };

  const response = await axios.get(API_URL, {
    params: BASE_SEARH_PARAMS,
  });

  return response.data;
}