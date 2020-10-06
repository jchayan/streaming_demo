const axios = require('axios');

class HttpClient {
  constructor(url) {
    this.url = url;
  }

  getStream () {
    return axios.get(this.url, {
      responseType: 'stream'
    }).then(response => {
      return response.data;
    });
  }
}

module.exports = HttpClient;
