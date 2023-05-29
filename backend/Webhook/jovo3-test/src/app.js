"use strict";
const { App } = require("jovo-framework");
const {
  Dialogflow,
  FacebookMessenger,
  Slack,
} = require("jovo-platform-dialogflow");
const { updateDevice } = require("./updateDevice");

console.log(
  "This template uses an outdated version of the Jovo Framework. We strongly recommend upgrading to Jovo v4. Learn more here: https://www.jovo.tech/docs/migration-from-v3"
);

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(new Dialogflow().use(new Slack(), new FacebookMessenger()));

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
  LAUNCH() {
    return this.toIntent("HelloWorldIntent");
  },

  HelloWorldIntent() {
    this.ask("Hello World! What's your name?", "Please tell me your name.");
  },

  async CustomTurnOnLightIntent() {
    console.log(this.$inputs);
    console.log(this.$inputs.Room.name);
    const device = this.$inputs.Room.name;
    const res = await updateDevice(device, "on");
    console.log(res);
    this.ask("Sure! I will turn on your lights");
  },
  async CustomTurnOffLightIntent() {
    console.log(this.$inputs.Room.name);
    const device = this.$inputs.Room.name;
    console.log(device);
    const res = await updateDevice(device, "off");
    console.log(res);
    this.tell("Sure! I will turn off your lights");
  },
  async TurnOnDevicesExcLightIntent() {
    console.log(this.$inputs.Devices.name);
    const device = this.$inputs.Devices.name;
    console.log(device);
    const res = await updateDevice(device, "on");
    console.log(res);
    this.tell(`Sure! I will turn on your ${device}`);
  },
  async TurnOffDevicesExcLightIntent() {
    const device = this.$inputs.Devices.name;
    console.log(device);
    const res = await updateDevice(device, "off");
    console.log(res);
    this.tell(`Sure! I will turn off your ${device}`);
  },
});

app.onRequest((handleRequest) => {
  console.log(JSON.stringify(handleRequest.host.getRequestObject()));
});

module.exports = { app };
