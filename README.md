# coding-test
# Coding Test

## Demo
URL: `https://coding-test-production.up.railway.app`

## Credential

| Name | Value     |
| :-------- | :------- |
| `username` | `syauqi@mail.com` or `ahmad@mail.com` |
| `password` | `123456` |


## Endpoints :

List of available endpoints:

- `POST /login`
- `POST /register`
- `GET /jobs`
- `GET /jobs/:id`

&nbsp;
## 1. POST /login
#### Description
- login to get token

#### Request
- body:

```json
{
  "username": "string",
  "password": "string"
}
```

_Response (200 - Ok)_

```json
{
	"access_token": "string"
}
```

_Response (401 - Invalid Login)_

```json
{
	"message": "error invalid username or password"
}
```

&nbsp;


## 2. POST /register
#### Description
- Create a new user

#### Request
- headers:

```json
{
  "access_token": "string"
}
```
- body:

```json
{
  "fullName": "string",
  "username": "string",
  "password": "string",
}
```

_Response (201 - Created)_

_Response (400 - Bad Request)_

```json
{
  "message": "username is required"
}
OR
{
  "message": "email is required"
}
OR
{
  "message": "password is required"
}
OR
{
  "message": "Password's length minimum 6 character"
}
```

&nbsp;
## 3. GET /jobs
#### Description
- get all jobs data

##### Query param for filtering/search

| Name | Value     |
| :-------- | :------- |
| `page` | `integer` |
| `description` | `string` |
| `location` | `string` |
| `full_time` | `bolean` |

#### Request
- headers:

```json
{
  "access_token": "string"
}
```


_Response (200 - OK)_

```json
[ 
   {
    "id": "32bf67e5-4971-47ce-985c-44b6b3860cdb",
    "type": "Full Time",
    "url": "https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb",
    "created_at": "Wed May 19 00:49:17 UTC 2021",
    "company": "SweetRush",
    "company_url": "https://www.sweetrush.com/",
    "location": "Remote",
    "title": "Senior Creative Front End Web Developer",
    "description": "<p><strong>SweetRush has an exciting opportunity for an experienced creative front-end developer (full stack is also acceptable) with an eye for graphic and UX design!</strong></p>"
  },
  {...}
]
```

&nbsp;
## 4. GET /jobs/:id
#### Description
- get user by id

#### Request
- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - Ok)_

```json

{
  "id": "32bf67e5-4971-47ce-985c-44b6b3860cdb",
  "type": "Full Time",
  "url": "https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb",
  "created_at": "Wed May 19 00:49:17 UTC 2021",
  "company": "SweetRush",
  "company_url": "https://www.sweetrush.com/",
  "location": "Remote",
  "title": "Senior Creative Front End Web Developer",
  "description": "<p><strong>SweetRush has an exciting opportunity for an experienced creative front-end developer (full stack is also acceptable) with an eye for graphic and UX design!</strong></p>"
}
```

&nbsp;

## Global Error

_Response (401 - invalid token)_

```json
{
  "message": "Invalid Token"
}
```
_Response (403 - forbidden)_

```json
{
  "message": "you are not authorize"
}
```
_Response (500 - internal server error)_

```json
{
  "message": "internal server error"
}
```
