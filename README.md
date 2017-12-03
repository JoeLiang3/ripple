# ripple app

Client currently runs on locahost:3000, proxy 3001

Server currently runs on localhost:3001

Attempting to deploy to Heroku

# Running Instructions:
Run "npm install" in ripple folder and my-app folder if package.json files have been changed

Type "npm start" in terminal to run server and my-app concurrently

# First Time Users:
Make sure XAMPP or different PHP development environment is installed on computer and run MYSQL server

First time running the app type the following query into the mysql terminal: mysql --user=root create database rippledb;

# Coding Styles:
Airbnb React/JSX Style Guide: https://github.com/airbnb/javascript/tree/master/react

Wordpress CSS: https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/

#Known Bugs:
- feed layout last bill still has divider line underneath

- officials map keeps moving despite not changing css

- css components move around depending on browser size

- can't enter null value in search bar

- no anchor point for the bill feed page after clicking Details link

- no back page functionality

- some members photos are squished and/or distorted

- search bar disappears after performing a search (since rendering new page)
