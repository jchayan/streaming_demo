const HttpClient    = require('./HttpClient');
const RtspClient    = require('./RtspClient');
const ConsoleWriter = require('./ConsoleWriter');

class CommandLineInterface {
  static main (writer) {
    let config = require('./config.json');
    let client = new RtspClient(config.rtspUrl);

    writer.write(client);
  }
}

CommandLineInterface.main(ConsoleWriter);
// CommandLineInterface.main(ConsoleWriter);
