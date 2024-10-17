# Regression Testing
This is a simple React application that demonstrates how to implement visual regression testing using Playwright. Visual regression tests help ensure that UI changes in the app are tracked by comparing screenshots of the rendered page to baseline images.

## Features
React Application: Basic app created with create-react-app.
Playwright for E2E Testing: Playwright is used for end-to-end tests and visual regression.
Visual Regression: Screenshots are taken during tests and compared to baseline images to detect UI changes.
## Prerequisites
Node.js (version 14 or higher)
npm (or yarn)
Playwright installed as a dev dependency
Installation
Clone this repository

## Install the dependencies:


npm install
Install Playwright and its required browsers:

npx playwright install
Running the App
Start the React application in development mode:


npm start
The app will be available at http://localhost:3000.

Visual Regression Testing
Playwright is configured to take screenshots during tests and compare them with baseline images to detect changes.

Running the Tests
To run the Playwright tests:


npx playwright test
This will:

Navigate to your app.
Take screenshots.
Compare the screenshots with the baseline images.
Report any visual differences.
Updating Baseline Screenshots
If the UI has intentionally changed and you want to update the baseline images, run the following command:


npx playwright test --update-snapshots
This will replace the current baseline screenshots with the latest screenshots taken during the test run.

## Learn More
For more information about Playwright and its features, check out the official Playwright documentation.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
