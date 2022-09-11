# Playlister Cypress E2E Tests

Follow the steps below to get Cypress up running and working with your url/element ids.

1. Start up your playlister application, and keep note of the url. Make sure it doesn't contain your html file in it.
2. Go to the **cypress.config.js** file, and change the **baseUrl** to yours.<br/>
3. Go to **cypress/e2e**, click on any one of the files. In it you should find a bunch of variables, each representing a specific id. Change all of these to the ids you set in your code. <br/> 
- Note: **Don't delete the '#' from each variable**. This is needed to identify the html element associated with the id.<br/>
4. Copy paste all those variables into the other 3 files, replacing the existing ones.<br/>
5. Run **npm install** in the tests directory. <br/>
6. Run **npx cypress open** in the tests directory.<br/>
- This should spin up the Cypress application. Once open, select the "E2E Testing" option, and choose Firefox as the browser.

If you have successfully completed the steps above, you should now be seeing this in the Cypress application:

 <img width="1515" alt="Screen Shot 2022-09-11 at 2 21 37 AM" src="https://user-images.githubusercontent.com/65587199/189515132-2c087328-e78c-478c-b919-224127f70ff6.png">

Selecting any one of the specs should run the tests in that suite.
