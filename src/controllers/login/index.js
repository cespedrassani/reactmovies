import {get} from '../../api';

const requestToken = async () => {
  try {
    console.log('alo');
    const response = await get({
      url: 'authentication/token/new',
    });

    return response;
  } catch (e) {
    throw e;
  }
};

export default {
  requestToken,
};
