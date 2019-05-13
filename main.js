var mqtt = require('mqtt');

var client = mqtt.connect(
  process.env.MQTT_HOST,
  {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD
  }
);
console.log('connected flag  ' + client.connected);
client.on('connect', function() {
  console.log('connected  '+ client.connected);
})
client.on('error', function(error) {
  console.log('Can\'t connect' + error);
  process.exit(1);
});
client.on('message', function(topic, message, packet) {
  console.log('Received message in topic ' + topic + ' - ' + message);
});
client.subscribe(process.env.MQTT_TOPIC, { qos: 1 });
