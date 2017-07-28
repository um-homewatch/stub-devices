# Homewatch

Example code for a Thesis project about IoT standardization, gateways and middlewares.

This project aims to build a concept middleware that could be adapted into production scenarios.

The middleware is divided into two parts, a hub that exposes devices from a network, and a cloud-based API that aggregates different hubs and connects them to the respective users, offering all kinds of functionalities.

[hub](https://github.com/zeesousa/homewatch-hub) - should run on a gateway device present on the user's home. This hub offers a REST API that should be exclusively accessed by our cloud service. The hub aggregates different implementations of the same type of device (light or lock for example) on a single, abstracted interface. In order to be accessed from the outside world, the hub runs alongside ngrok, allowing the access from external networks. Java was used for the implementation of this service, because of its robust object oriented nature, allowing us to easily abstract different devices.

[api](https://github.com/zeesousa/homewatch-api) - is a web service that runs on the cloud, that aggregates various hub's associating them to users. This service allows for users to register their own hubs, giving them extra functionality, like scenarios and triggers, and also allowing them remote access. The service makes use of the ngrok tunnel to interact with the hub. Basically, client apps of this service can interact with the user's devices easily.

Later on, an Android client app will be implemented, to showcase all of the API functionality.
