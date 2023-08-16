# [SEN Extravaganza](https://sen-extravaganza-react.onrender.com/)

Clothing stores abound, but if you want to own one, how can you populate what goes in your store? Well, SEN Extravaganza is your answer.

SEN Extravaganza was created as the Single Resource Pair Project requirement for the the Pursuit Fellowship. It was deployed using Render and can be found [here](https://sen-extravaganza-react.onrender.com/).

[The Front End (you are here)](https://github.com/Sarai-ii/srp-clothing-front-end)
[The Back End](https://github.com/JenniferEinstein/srp-clothing-back-end)

| Developers |
| :--------------: |
| [Jennifer Einstein](https://github.com/JenniferEinstein) |
| [Sarai Thomas](https://github.com/Sarai-ii) |


## Project Planning

* Wireframe - [Wireframe.cc](https://wireframe.cc/xRUpRT)
* Project Tracking - [Trello](https://trello.com/b/QEKVznDa/project-management)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation: `npm install`

To Start Server: `npm start`  


## Pages, Routes, and Other Notables

### Routes/Pages

| Route     | Page |Description |
|---------  | ----------- | ----|
| /     | Home Page |  landing page |
|/new-this-season | Index Page| see all clothing|
|/clothes/:id      | Details | see a single item of clothing |
|/clothes/new     | New Form| add clothes to database |
|/clothes/:id/edit |Edit Form | change an item of clothing already in the database |
|anything else | 404 page | non-specified pages |



### Delete Pop-up Modal Window

To ensure that the user does not accidentally delete an item in the database, this pop-up asks the user to confirm their deletion request.




## Technologies Used

* JavaScript
* React
* Bootstrap
* Express JS
* PostgreSQL
* NPM (axios, react-router-dom, CORS, nodemon, dotenv)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


<!-- ### Landing Page

![landing page](./src/Assets/landing-page.png)

### Index Page

The user can view all clothing items in the database on this page.
![index page](./src/Assets/index-page.png)

### New Form

The user can add a clothing item to the database.
![new form](./src/Assets/new-page.png)

### Edit Form

From here, the user can edit or update am item already in the database.
![edit form](./src/Assets/edit-page.png)

### Details of Clothing Item

The user can view a particular piece of clothing.
![details](./src/Assets/details-page.png) -->

