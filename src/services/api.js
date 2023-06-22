import axios from 'axios';

const BASE_URL = new URL(
  'https://6492f0e4428c3d2035d0f387.mockapi.io/api/tweets'
);

const fetchTweets = async (page = 1, PER_PAGE = 3) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?limit=${PER_PAGE}&page=${page}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};

const fetchTotalTweets = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data?.length || 0;
  } catch (error) {
    return error.message;
  }
};

export const API = {
  fetchTweets,
  fetchTotalTweets,
};
