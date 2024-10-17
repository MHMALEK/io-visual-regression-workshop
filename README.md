
# Regression Testing
This is a simple React application that demonstrates how to implement visual regression testing using Playwright. 

There is two different project. one is the react app that run a simple app. the other app is the visutal regression app that open the url of localhost:3000 (the react app) and do some simple testing. in order to run both, please follow install steps for both of them.

## Features

React Application: Basic app created with create-react-app.
Playwright for E2E Testing: Playwright is used for end-to-end tests and visual regression.
Visual Regression: Screenshots are taken during tests and compared to baseline images to detect UI changes.


## Prerequisites

 -  Node.js (version 14 or higher) 
 -  npm (or yarn)
 -  Playwright installed as a dev dependency Installation 


## Install the dependencies:

There is two different project. one is the react app that run a simple app. the other app is the visutal regression app that open the url of localhost:3000 (the react app) and do some simple testing. in order to run both, please follow install steps for both of them.

    npm install

Install Playwright and its required browsers:

    npx playwright install

### Running the App

Start the React application in development mode:

    npm start

The app will be available at http://localhost:3000.

## Visual Regression Testing

Playwright is configured to take screenshots during tests and compare them with baseline images to detect changes.
after install dependencies for both project, go to the react app, start the server (npm run start will run it on port 3000). then go back to vr-app and run the tests. in order to do that go to vr-app and do the following steps:

first install playwright browsers by this command

    npx playwright install

Running the Tests

after it finished, you will have browsers, then go and run them. (you can either run the npm scripts that defined on package.json like npm run `test:visual_regression`) or use the below commands (that is default npx commands)

To run the Playwright tests:

    npx playwright test

if you want to see the UI: 

    npx playwright test --ui

    
This will:

 - Navigate to your app. 
 - Take screenshots. 
 - Compare the screenshots with
   the baseline images. 
   Report any visual differences. 

## Updating Baseline Screenshots

If the UI has intentionally changed and you want to update the baseline images, run the following command:

    npx playwright test --update-snapshots

This will replace the current baseline screenshots with the latest screenshots taken during the test run.

## Learn More
For more information about Playwright and its features, check out the official Playwright documentation.

## License
This project is licensed under the MIT License - see the LICENSE file for details.











