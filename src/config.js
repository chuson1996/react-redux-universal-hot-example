require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'My Social Media',
    description: 'Chu Hoang Son - Front-end Developer',
    head: {
      titleTemplate: 'Chu Hoang Son: %s',
      meta: [
        {name: 'description', content: 'Chu Hoang Son\'s porfolio.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Chu Hoang Son\'s porfolio.'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'fi_FI'},
        {property: 'og:title', content: 'Chu Hoang Son - Front-end Developer'},
        {property: 'og:description', content: 'Chu Hoang Son\'s porfolio.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@chuson1996'},
        {property: 'og:creator', content: '@chuson1996'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
