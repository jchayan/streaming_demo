const { RTSPClient, H264Transport } = require('yellowstone');
const fs = require('fs');

class RtspClient {
  constructor(url, user, password) {
    this.url = url;
    this.client = new RTSPClient(user, password);
  }

  getStream () {
    return this.client.connect(this.url, { connection: 'udp' }).then(details => {
      const writeStream = fs.createWriteStream('/tmp/rabbit.264');

      const h264 = new H264Transport(this.client, writeStream, details);
      this.client.play();

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const readStream  = fs.createReadStream('/tmp/rabbit.264');
          resolve(readStream)
        }, 20000);
      });

    }).catch(console.error);
  }
}

module.exports = RtspClient;
