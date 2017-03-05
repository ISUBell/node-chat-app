var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Mike';
    var text = 'It worked!';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var latitude = 1;
    var longitude = 1;
    var from = "admin"
    var locationMessage = generateLocationMessage(from, latitude, longitude);
    var url = "https://www.google.com/maps?q1,1"

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from});
    expect(locationMessage.url).toBe(url);
  })
});
