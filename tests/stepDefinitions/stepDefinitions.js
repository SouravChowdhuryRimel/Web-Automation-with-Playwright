import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { chromium } from "playwright";
import locatorsPage from "../../Locators/locators.js";  
import allData from "../../data/data.js"; 

let page, browser;
const locator = locatorsPage; // Use imported object directly
const data = allData; // Use imported object directly

Given("Open Browser and Visit Website", async function () {
  browser = await chromium.launch({ headless: true }); // Change to `true` for CI/CD
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(data.orange_url);
});

When("Enter the user login with valid username & password", async function (dataTable) {
  const credentials = dataTable.hashes()[0]; // Extracts username and password
  await page.waitForSelector(locator.Username, { state: "visible", timeout: 10000 });
  await page.fill(locator.Username, credentials.Username);
  await page.waitForSelector(locator.Password, { state: "visible", timeout: 10000 });
  await page.fill(locator.Password, credentials.Password);
});

Then("Click The Login Button with Valid Username & Password", async function () {
  await page.click(locator.login);
  await page.waitForTimeout(data.twoSecond);
});

When("open admin panel", async function () {
  await page.click(locator.admin);
});

Then("Enter the admin name searching", async function () {
  await page.fill(locator.usernameee, "Admin");
});

Then("Now search the admin", async function () {
  await page.click(locator.Search);
});

//configuration

Then('Go to configuration', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.configaration)).toHaveText('Configuration');
  await expect(page.locator(locator.configaration)).toBeVisible();
  await page.locator(locator.configaration).click();
  await page.waitForTimeout(2000);
});

Then('Click on email configuration', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.emailconfig)).toHaveText('Email Configuration');
  await expect(page.locator(locator.emailconfig)).toBeVisible();
  await page.locator(locator.emailconfig).click();
  await page.waitForTimeout(2000);
});

Then('Write the email name', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.emailbox)).toBeVisible();
  await page.locator(locator.emailbox).fill('qups@gmail.com');
});

Then('Setup the email configuration', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.saveConfig)).toHaveText('Save');
  await expect(page.locator(locator.saveConfig)).toBeVisible();
  await page.locator(locator.saveConfig).click();
});

Then('Go to configuration for email subscription', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.configaration)).toHaveText('Configuration');
  await expect(page.locator(locator.configaration)).toBeVisible();
  await page.locator(locator.configaration).click();
});

Then('Click on email subscription', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.configEmailSub)).toHaveText('Email Subscriptions');
  await expect(page.locator(locator.configEmailSub)).toBeVisible();
  await page.locator(locator.configEmailSub).click();
});

Then('Click on leave application', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.leaveApp)).toBeVisible();
  await page.locator(locator.leaveApp).click();
});

Then('Go configuration for module', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.configaration3)).toHaveText('Configuration');
  await expect(page.locator(locator.configaration3)).toBeVisible();
  await page.locator(locator.configaration3).click();
});

Then('Click on module', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.module)).toHaveText('Modules');
  await expect(page.locator(locator.module)).toBeVisible();
  await page.locator(locator.module).click();
});

Then('Change mobile configuration', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.mobilebutton)).toBeVisible();
  await page.locator(locator.mobilebutton).click();
});

Then('Setup the Module', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.saveModule)).toHaveText('Save');
  await expect(page.locator(locator.saveModule)).toBeVisible();
  await page.locator(locator.saveModule).click();
  await page.waitForTimeout(2000);
});

// Organization

Then('Go to organization', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.organization)).toHaveText('Organization');
  await expect(page.locator(locator.organization)).toBeVisible();
  await page.locator(locator.organization).click();
  await page.waitForTimeout(2000);
});

Then('Check organization info', async function () {
  await page.waitForTimeout(2000);
  await expect(page.locator(locator.organizationInfo)).toBeVisible();
  await page.waitForTimeout(2000);
});

// Close browser after scenario execution
Then("Close the browser", async function () {
  await browser.close();
});
