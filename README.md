# Leader Board UI
Leader Board API

## Prerequisites
- Backend SHould Be up and Running
- If you need to change the backend url go to src/utils/AppGlobal.js and change scoreAPIRoute 


## Starting Project


### To start the project in local environment
 
- `npm install
  `
- `npm start
  `

### Features

#### Upon Starting the app you will be redirected to Overall HighScore Page which includes top 10 users.

![resources/screen1.png](resources/screen1.png)

#### Upon Click on User Name, Corresponding user's Score card will be displayed.

![resources/screen2.png](resources/screen2.PNG)

#### Upon CLick On Each category, It will show the top 10 Users of Each category.

![resources/screen3.png](resources/screen3.PNG)

#### By Entering User's Name you can Search for Particular User's Score Card

![resources/screen4.png](resources/screen4.png)

![resources/screen5.png](resources/screen5.PNG)

#### If No User Data is found for given search text, It will show following page

![resources/screen5.png](resources/screen6.PNG)

#### Also you can compare two users 

![img.png](resources/screen8.png)

![img.png](resources/screen9.PNG)

#### If you enter an invalid user name to compare, then only valid user's data will be displayed

![img.png](resources/screen10.PNG)

#### used libraries

- react v17
- material UI - Google material design UI components V4

#### dev dependencies
- eslint (for linting)

### UI Design Assumptions

- UI will show top 10 users in each category
- Overall category's score will be determined by the sum of the score of other categories
- Overall category's level will be determined by the sum of the level of other categories
- This application is designed to display leaderboard. Any features to update score, add players etc were not added
