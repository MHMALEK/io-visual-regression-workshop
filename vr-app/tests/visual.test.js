const { test, expect } = require("@playwright/test");

test.describe("React App", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the React app before each test
    await page.goto("/");
  });

  // Test for the logo image
  test("should display the logo image", async ({ page }) => {
    const logo = page.locator("img.App-logo");
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute("alt", "logo");
  });

  // Test for the paragraph content
  test("should display the correct text in paragraph", async ({ page }) => {
    const paragraph = page.locator("p");
    await expect(paragraph).toHaveText("Edit src/App.js and save to reload.");
  });

  // Test for the "Learn React" link
  test('should have a working "Learn React" link', async ({ page }) => {
    const learnReactLink = page.locator("a.App-link");
    await expect(learnReactLink).toBeVisible();
    await expect(learnReactLink).toHaveAttribute("href", "https://reactjs.org");
    await expect(learnReactLink).toHaveText("Learn React");
  });

  // Take a single screenshot of the full page
  test("should take a screenshot of the entire page", async ({ page }) => {
    // Capture and save the screenshot
    await page.screenshot({
      path: "screenshots/full-page.png",
      fullPage: true,
    });
  });
  // Test to take a screenshot and compare it with the baseline
  test("should match the baseline screenshot of the page", async ({ page }) => {
    // Take the screenshot of the entire page
    const screenshot = await page.screenshot();

    // Compare the screenshot with the baseline
    expect(screenshot).toMatchSnapshot("full-page.png"); // Matches the screenshot with 'full-page.png' in the snapshot directory
  });
});
