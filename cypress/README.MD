Installation Steps 
Install nodejs and set environment variables in Windows to execute node
Install npm,npm install cypress
Open Visual studio code
Go to Terminal: Clone Git...
npx cypress run.. to run in headless mode OR
npx cypress open..to run in the TestRunner and view the execution in Browser
Test execution summary will be displayed at the Command Line 
Mocha reports will be generated under Reports folder

Tools Used:
Visual Studio code
Cypress for Javascript BDD automation


Test approach:
Manually perform the below listed testing types that are in scope and prepare bug reports on 2-3 most critical bugs in the application. Automate the top 5 critical functionalities of Buggy Cars Rating-web application
Testing Scope:
In Scope:
Functional Testing:
Test the overall functionality of the Web application- Buggy Cars Rating (https://buggy.justtestit.org)
•	Test internal links and external links to find out if they are broken
•	Test the functionality of the forms available(Login form ,Registration form etc) Check for validation of the fields available in the forms while entering, updating and deleting data into the input fields, their default values, proper error messages etc
•	Test functional flows of the application. Important Functional flows to covered in testing:
         o	Browsing as a user who is not logged in
         o	Browsing as a user who is logged in
         o	Login feature
         o	Voting and Ranking features, accuracy of the information displayed with regards to number of Votes and Ranks
         o	Registration feature
         o	Profile feature
         o	Sorting feature

Compatibility Testing:

Test for Browser compatibility, operating system compatibility, device compatibility.
Test for responsiveness of the application.

Usability Testing:

Test UI design, speed, and ease of navigation, accessibility and readability

Automation Testing:
Below listed critical features will be automated

Out of Scope:
API testing
Security testing
Performance testing

Bug Report can be found at:Bug Report.docx


