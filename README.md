# Hour tracker

This is an hour tracker. Users can add, edit and remove their hours. Admin can do it on behalf of any user. Also, admin can see the summary.

Users must authenticate by basic authentication.

This is Demo 4 for course TIES4560 SOA and Cloud Computing by Jyväskylä university at fall 2019.

## Installation

1. Install Node https://nodejs.org/
2. Go to project folder
3. Install dependencies by running `npm install`
4. Start the application by running `npm start`

## Users

You may use these username - password pairs:
gandalf - gray
bilbo - baggins
eowyn - rohan
legolas - greenleaf
john - ronald

The last one, john, is an admin user. Others are members.

## Sample usage

This demonstrates authentication and authorisation.

`GET /hours`
=> Missing Authorization Header

Add Basic Authentication header with invalid username and password, say "user" and "pass"
`GET /hours`
=> Invalid Authentication Credentials

User correct credentials, for example username: "gandalf", password: "gray"
`GET /hours`
=> List of users' hours

Get summary with above credentials
`GET summary`
=> No access

Change credentials for admin - username: "john", password: "ronald"
`GET summary`
=> Summary of all hours

Update hours for user by admin
`PUT hours/2`
{
    "userId": 1,
	"hours": 3,
}

Add new user
`POST /users/register`
Body:
{
    "username": "merri",
    "password": "brandybuk",
    "firstName": "Meriadoc",
    "lastName": "Brandybuk"
}

Change credentials for new user and add new hour - username: "merri", password: "brandybuk"
`POST hours`
Body:
{
	"projectId": 2,
	"hours": 5,
	"description": "Bake the cake"
}

Change credentials for admin user and get summary - username: "john", password: "ronald"
`GET summary`
=> Summary of all hours

## All endpoints

`POST /users/register`
Body:
{
    "username": "merri",
    "password": "brandybuk",
    "firstName": "Meriadoc",
    "lastName": "Brandybuk"
}
Creates new user

### For members

`GET hours`
Returns user's hours

`GET hours?minLength=1&maxLength=2.5`
Returns user's hours limited with hour length

`POST hours`
Body:
{
	"projectId": 2,
	"hours": 1,
	"description": "Make sure someone baked the cake"
}
Saves new hour for the user

`PUT hours/{id}`
{
	"hours": 3,
}
Updates given hour if it is user's own hour
Returns 404 if there is no hour with given ID
Returns 403 if the hour does not belong to the user

`DELETE hours/{id}`
Deletes given hour if it is user's own hour
Returns 404 if there is no hour with given ID
Returns 403 if the hour does not belong to the user

`GET hours/{id}/history`
Returns change history for given hour

`GET hours/{id}/history/{id}`
Returns change the specific history entity for given hour

### For admin

`GET summary`
Returns nicely formatted summary of all hours

`GET hours`
Returns all users' hours

`GET hours?minLength=1&maxLength=2.5`
Returns all users' hours limited with hour length

`POST hours`
Body:
{
    "userId": 2,
	"projectId": 2,
	"hours": 1,
	"description": "Make sure someone baked the cake"
}
Saves new hour for the user. Notice that the user must be specified in the body.

`PUT hours/{id}`
{
    "userId": 2,
	"hours": 3,
}
Updates given hour if it is user's own hour. Notice that the user id must be specified in the body.
Returns 404 if there is no hour with given ID
Returns 403 if the hour does not belong to the user

`DELETE hours/{id}`
Deletes given hour if it is user's own hour. Notice that the user id must be specified in the body.
Returns 404 if there is no hour with given ID
Returns 403 if the hour does not belong to the user

`GET hours/{id}/history`
Returns change history for given hour

`GET hours/{id}/history/{id}`
Returns change the specific history entity for given hour

## Thanks to

Original skeleton for the project is downloaded from: https://github.com/cornflourblue/node-basic-authentication-api

For documentation and instructions check out http://jasonwatmore.com/post/2018/09/24/nodejs-basic-authentication-tutorial-with-example-api

## Author

Johanna Kaihlavirta
johanna.k.kaihlavirta@student.jyu.fi