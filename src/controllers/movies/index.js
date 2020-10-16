import {get, API_IMAGE_PATH} from '../../api';

const getMovies = async (page) => {
  try {
    const response = await get({
      url: 'movie/upcoming',
      params: {
        page,
      },
    });

    response.results.map(async (item) => {
      item.poster_path = item.poster_path
        ? `${API_IMAGE_PATH}w500${item.poster_path}`
        : null;
      item.backdrop_path = item.backdrop_path
        ? `${API_IMAGE_PATH}w500${item.backdrop_path}`
        : null;
    });

    return response;
  } catch (e) {
    throw e;
  }
};

const getMovie = async (id) => {
  try {
    const response = await get({
      url: `movie/${id}`,
    });

    const {poster_path, backdrop_path} = response;

    response.poster_path = poster_path
      ? `${API_IMAGE_PATH}w500${poster_path}`
      : null;

    response.backdrop_path = backdrop_path
      ? `${API_IMAGE_PATH}w500${backdrop_path}`
      : null;

    return response;
  } catch (e) {
    throw e;
  }
};

export default {
  getMovies,
  getMovie,
};
