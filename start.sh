#!/bin/sh

DIR=$(dirname "$(readlink -f "$0")")
echo $DIR

cd "$DIR/rest-devices"
yarn
cd ..

cd "$DIR/coap-devices"
yarn
cd ..

screen -dmS ngrok ngrok http 4567
screen -dmS hub java -jar homewatch-hub.jar
screen -dmS light node "$DIR/rest-devices/src/light.js" 9000
screen -dmS light-coap node "$DIR/coap-devices/src/light.js" 9001
screen -dmS lock node "$DIR/rest-devices/src/lock.js" 9002
screen -dmS thermostat "$DIR/node rest-devices/src/thermostat.js" 9003
screen -dmS weather node "$DIR/rest-devices/src/weather.js" 9004
screen -dmS motion node "$DIR/rest-devices/src/motion_sensor.js" 9005
