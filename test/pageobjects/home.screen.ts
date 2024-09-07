import { browser, expect } from "@wdio/globals";
// @ts-ignore
import FlutterIntegrationDriverService from "wdio-flutter-by-service";

class HomeScreen {
  async displayHomePageTitle() {
    try {
      const title = await browser.flutterByValueKey$("AppBarTitle");
      expect(await title.getText()).toEqual("Flutter Demo Home Page");
    } catch (error) {
      console.error("Error fetching home page title:", error);
    }
  }
  
  async displayCounterText() {
    try {
      const counterText = await browser.flutterByValueKey$("CounterText");
      expect(await counterText.getText()).toEqual(
        "You have pushed the button this many times:"
      );
    } catch (error) {
      console.error("Error fetching counter text:", error);
    }
  }

  async clickAddButton() {
    const incrementButton = await browser.flutterByValueKey$("IncrementButton");
    await incrementButton.click();
  }

  async getCounterValue() {
    try {
      const counter = await browser.flutterByValueKey$("CounterValue");
      const  counterText = await counter.getText();
      return counterText;
    } catch (error) {
      console.error("Error fetching counter value:", error);
      return null;
    }
  }
}

export default new HomeScreen();
