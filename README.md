# Employee Directory -- Homework 19

## Description  
A searchable, sortable employee directory built with React and the randomuser.me API. 

## Table of Contents

* [Technologies Used](#technologies-used)

* [How to Use](#how-to-use)

* [How I Made This](#how-i-made-this)

* [Deployed Application](#application-deployed-with-heroku)

* [GitHub Repo](#link-to-github-repo)

* [Future Development Ideas](#future-development-ideas)  

## Technologies Used  
Built in Visual Studio with          
HTML       
CSS  
Bootstrap        
Javascript        
Node.js   
React
Axios
Moment.js
Randomuser.me API  

## How to Use    
Navigate to . 
   
![image](./public/assets/screenshot.png)  

## How I Made This      
I was given a functioning application and asked to make it work offline. Because I was turning this into a progressive web app (PWA), I added a manifest. I also added a db.js file to set up IndexedDB functionality. IndexedDB will now store transactions when the user is offline and then push them to the Mongo database the next time the user is online. I used service workers with a cache API to make this work. I then adjusted index.html and index.js to link everything together and make it fully functional, online and off!

## Application Deployed With Heroku:
https:

## Link to GitHub Repo    
https://github.com/alyssahellrung/react_employee_directory  

## Future Development Ideas
--Ability to sort based on every category (not just last name)