const process = require('process');

class ConsoleWriter {
  static async write (client) {
    let readStream = await client.getStream();

    return readStream.pipe(process.stdout);
  }
}

module.exports = ConsoleWriter;
