// {
// "user": "Alexander Stiedemann",
// "tweets": 86017,
// "followers": 42023,
// "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/749.jpg",
// "id": "1"
// },

import axios from 'axios';

axios.defaults.baseURL = 'https://6492f0e4428c3d2035d0f387.mockapi.io/api';

const fetchTweets = async () => {
  try {
    const { data } = await axios.get('/tweets');
    return data;
  } catch (error) {
    return error.message;
  }
};

export const API = {
  fetchTweets,
};
