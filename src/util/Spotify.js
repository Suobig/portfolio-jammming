
import { clientId } from './spotify_secret';

const redirectUrl = 'http://localhost:3000/';
const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`

let accessToken = '';
let expiresIn = 0;

const parseTokenFromUrl = () => {
  const url = window.location.href;
  const tokenMatch = url.match(/access_token=([^&]*)/);
  const expirationTimeMatch = url.match(/expires_in=([^&]*)/);

  if (tokenMatch && expirationTimeMatch) {
    accessToken = tokenMatch[1];
    expiresIn = Number(expirationTimeMatch[1]);    

    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');

    return true;
  } else {
    return false;
  }
}

const Spotify = {
  getAccessToken: () => {
    if (accessToken) {      
      return accessToken;
    } else {
      const parsed = parseTokenFromUrl();
      if (parsed) {
        return accessToken;
      } else {
        window.location = authorizeUrl;
      }
    }
  },

  search(token, searchText) {
    const searchUri = `https://api.spotify.com/v1/search?q=${searchText}&type=track`
    return fetch(searchUri, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
};

export default Spotify;