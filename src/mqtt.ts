import mqtt from 'mqtt';

const mqttUrl = process.env.MQTT_URL || 'mqtt://localhost:1883';
export const client = mqtt.connect(mqttUrl);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});
