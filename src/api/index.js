const api_key = '2822730db18818ac1932f175cce895dd';
const API_PATH = 'https://api.themoviedb.org/3/';
export const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/';

export const get = async ({url, params}) => {
  try {
    var prms = new URLSearchParams({
      api_key,
      ...params,
    });
    const response = await fetch(`${API_PATH}${url}?${prms}`);
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw Error(response.statusText);
  } catch (e) {
    throw e;
  }
};
