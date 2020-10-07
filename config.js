const path = require('path')

const config = {
  production: {
    url: 'https://www.lfmcontabilidade.com.br',
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost.db')
      },
      debug: false
    },
    server: {
      port: '3000',
      host: '0.0.0.0'
    }
  }
}

export default config