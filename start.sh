#!/bin/sh

screen -dmS ngrok ngrok start homewatch-hub ssh
screen -dmS hub java -jar homewatch-hub.jar
screen -dmS light node rest-devices/src/light.js 9000
screen -dmS light-coap node coap-devices/src/light.js 9001
screen -dmS lock node rest-devices/src/lock.js 9002
screen -dmS thermostat node rest-devices/src/thermostat.js 9003
screen -dmS weather node rest-devices/src/weather.js 9004
screen -dmS motion node rest-devices/src/motion_sensor.js 9005
