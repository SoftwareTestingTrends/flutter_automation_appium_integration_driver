import { config } from "./wdio.shared.conf";

config.capabilities = [
  {
    platformName: "Android",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "FlutterIntegration",
    "appium:autoGrantPermissions": true,
    "appium:app": "test/apps/android/app-debug.apk",
    "appium:newCommandTimeout": 240,
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 5,
    //
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
  },
];

exports.config = config;

