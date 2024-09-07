import allureReporter from "@wdio/allure-reporter";
// import { expect } from "@wdio/globals";
import HomeScreen from "../pageobjects/home.screen";

describe("Appium Flutter Integration Driver Test", () => {
  it("Flutter counter demo app", async () => {
    allureReporter.addFeature("Increment counter by 1");
    await HomeScreen.displayHomePageTitle();
    await HomeScreen.displayCounterText();
    await HomeScreen.clickAddButton();
    const counter = await HomeScreen.getCounterValue();
    expect(counter).toEqual("1");
  });
});

