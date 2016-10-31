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
  app: {
    title: 'Son Chu Hoang: Front-end Developer',
    description: 'Son Chu: Front-end Developer',
    head: {
      titleTemplate: 'Son Chu: Front-end Developer: %s',
      meta: [
        {name: 'description', content: 'Son Chu: Front-end Developer'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Son Chu Hoang: Front-end Developer'},
        {property: 'og:image', content: 'https://www.sonchu.co/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Son Chu Hoang: Front-end Developer'},
        {property: 'og:description', content: 'All social media in one place.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@chuson1996'},
        {property: 'og:creator', content: '@chuson1996'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
