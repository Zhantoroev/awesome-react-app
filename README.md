# PERN project for CS 204
* This is a quiz application with user authentification

<img src="https://github.com/Zhantoroev/awesome-react-app/blob/main/public/img1.png" width="50%" /><img src="https://github.com/Zhantoroev/awesome-react-app/blob/main/public/img2.png" width="50%" />
<img src="https://github.com/Zhantoroev/awesome-react-app/blob/main/public/img3.png" width="50%" /><img src="https://github.com/Zhantoroev/awesome-react-app/blob/main/public/img5.png" width="50%" /> 
<img src="https://github.com/Zhantoroev/awesome-react-app/blob/main/public/img6.png" width="50%" /><img src="https://github.com/Zhantoroev/awesome-react-app/blob/main/public/img4.png" width="50%" />
<img src="https://github.com/Zhantoroev/awesome-react-app/blob/main/public/img3.gif" width="100%" />


## [API Documentation](https://peaceful-retreat-54716.herokuapp.com/api-docs/)
* To view all users data from database `/all`  HTTP Method: Get
* To view a certain user data from database `/all:id`  HTTP Method: Get
* To sign in `/signin` HTTP Method: Post
* To register `/register` HTTP Method: Post
* To view an authorized user's (your) data `/profile/:id` HTTP Method: Get/Post
* To view and update score `/score` HTTP Method: Put
* To view API documentation `/api-docs` HTTP Method: GET


## Tool / technologies used
* `PERN Stack` (Postgeres Express React Node)
* `bcrypt` for hashing password
* `knex-js` to connect database with the backend
* `particles-js` for background
* `tachyons` for styling
* `REST API`

## [Database schema](https://github.com/Zhantoroev/awesome-api/blob/main/PSQL.txt)

#### Users table example :
| id       | name      | email            | score | joined     |
| ---      | ---       | ---              | ---   | ---        |
| 1        | Syimyk    | syimyk@gmail.com | 55    | 2021-05-09 |

#### Login table example :
| id       | email            | hash                                                         |
| ---      | ---              | ---                                                          |
| 1        | syimyk@gmail.com | $2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF6 |

[Back-end](https://github.com/Zhantoroev/awesome-api)

[Server](https://peaceful-retreat-54716.herokuapp.com/)

[Live](https://awesome-react-app.herokuapp.com/) on Heroku
