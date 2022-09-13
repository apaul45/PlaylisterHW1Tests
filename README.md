# Playlister Cypress E2E Tests

Follow the steps below to get Cypress up running and working with your url/element ids.

1. Start up your playlister application, and keep note of the url. Make sure it doesn't contain your html file in it.
2. Go to the **cypress.config.js** file, and change the **baseUrl** to yours.<br/>
3. Go to **cypress/e2e/empty.cy.js**. In it you should find a bunch of variables, each representing a specific id. Change all of these to the ids you set in your code. <br/> 
- Note: **Don't delete the '#' from each variable**. This is needed to identify the html element associated with the id.<br/>
4. Run **npm install** in the tests directory. (Download **Node.js** before doing this if it isn't already installed** <br/>
5. Run **npx cypress open** in the tests directory.<br/>
- This should spin up the Cypress application. Once open, select the "E2E Testing" option, and choose Firefox as the browser.

If you have successfully completed the steps above, you should now be seeing this in the Cypress application:

<img width="1536" alt="Screen Shot 2022-09-12 at 9 30 51 AM" src="https://user-images.githubusercontent.com/65587199/189667269-841d2daa-9d44-4ba2-b2cf-0b5449e69d98.png">

Selecting a spec should then automatically run the tests in that suite (empty.cy.js won't run anything because it's only used for exporting your ids).
