import { config } from "./wdio.shared.conf";

config.capabilities = [
  {
    platformName: "iOS",
    "appium:platformVersion": "17.5",
    "appium:deviceName": "iPhone 15 Pro Max",
    "appium:Reset": false,
    "appium:automationName": "FlutterIntegration",
    "appium:app": "test/apps/ios/Runner.app",
    maxInstances: 5,
  },
];

exports.config = config;

