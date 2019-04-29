# My rest-api

## List of user routes

### /api/users
* HTTP: GET
* Header(s): none
* Body : none
* Description: Get all users

### /api/users/:id
* HTTP: GET
* Header(s): none
* Body: none
* Description: Get a single user


### /api/users
* HTTP: POST
* Header(s): none
* Body: 
```
username: string (required),
password: string (required)
```
* Description: Create a user

### /api/users/:id
* HTTP: DELETE
* Header(s): none
* Body: none
* Description: Delete a user

### /api/users/:id
* HTTP: PUT
* Header(s): none
* Body:
```
username: string (AND OR)
password: string 
```
* Description: Update a user with new info

## List of todos routes
### **All of the following routes need authentication!**
#### **Authentication can be done with logging in, thus generates a token**
### /api/todos
* HTTP: POST
* Header(s): Token
* Body: 
```
title: string (required),
description: string (optional)
```
* Description: Create a todo

### /api/todos/
* HTTP: GET
* Header(s): Token
* Body: none
* Description: Get all todos that is owned by the user who is logged in

### **The following routes will only work if the todo is owned by the person who is logged in** ###

### /api/todos/:id
* HTTP: GET
* Header(s): Token
* Body: none
* Description: Get one todo (Owner's only)

### /api/todos/:id
* HTTP: DELETE
* Header(s): Token
* Body: none
* Description: Delete a todo (Owner's only)

### /api/todos/:id
* HTTP: PUT
* Header(s): Token
* Body: 
```
title: string (AND OR)
description: string 
```
* Description: Update a todo with new values

### /api/todos/:id
* HTTP: PATCH
* Header(s): Token
* Body: 
```
title: string (AND OR)
description: string 
```
* Description: Update a todo with new values





