const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';

const config = {
   apiKey,
   db: {
       host: '127.0.0.1',
       user: 'x',
       password: 'x',
       database: 'movies'
   }
}
// In order to make stuff in this file available
// to other node prgorams... we use module.exports

module.exports = config;