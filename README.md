# Employee Directory -- Homework 19

## Description  
A searchable, sortable employee directory built with React and the Randomuser.me API. 

## Table of Contents

* [Technologies Used](#technologies-used)

* [How to Use](#how-to-use)

* [How I Made This](#how-i-made-this)

* [Deployed Application](#application-deployed-with-github-pages)

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
Navigate to https://alyssahellrung.github.io/react_employee_directory/. You will see a table of random employees. Each row of the table contains information about one employee: their image, name, phone number, email address, and date of birth. If you click the "Sort" button over the name column, the table will rerender with the employees in alphabetical order by last name. If you search for an employee by typing their first name in the search bar, you will see the table change as you type until you finish typing, at which point only the employee(s) with that first name will remain in the table.  
   
![image](./public/assets/screenshot.png)  

## How I Made This      
I used create-react-app to begin and organize this application. I split my application into four components and used App.js to return the parent component, "Container", which is stateful and passes down props to the SearchBar and EmployeeTable components. The Header component is purely for layout purposes, so it doesn't use props. I used Randomuser.API to generate a list of 200 random "employees" for my table and Moment.js to format their dates of birth. The sort function uses .sort and the search function uses .filter, both of which I did not have a lot of experience with, so this was good practice with those methods. The styling is a mixture of Bootstrap and custom css (the header, for example, is custom, while the table is Bootstrap). All in all, this assignment taught me a lot about React and I enjoyed it.  

## Application Deployed With GitHub Pages  
https://alyssahellrung.github.io/react_employee_directory/

## Link to GitHub Repo    
https://github.com/alyssahellrung/react_employee_directory  

## Future Development Ideas
--Ability to sort based on every category (not just last name)