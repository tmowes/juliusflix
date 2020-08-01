const URL_LOCAL = 'http://localhost:3336/'

const URL_ONLINE = 'https://juliousflix.herokuapp.com/'

export const URL_BACKEND = window.location.hostname.includes('localhost')
  ? URL_LOCAL
  : URL_ONLINE
