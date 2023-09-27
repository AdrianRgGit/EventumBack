<h1 id="top">Eventum - Back end</h1>

Eventum is an application designed to optimize and automate the process of creating, managing, and confirming events at **Marina de Empresas**. Its main purpose is to improve operational efficiency and provide a more convenient user experience for participants who wish to attend our events.

## Table of Contents
1. [Structure](#1-structure)
2. [Installation](#2-installation)
   - [Main Dependencies](#21-main-dependencies)
   - [Secondary Dependencies](#22-secondary-dependencies)
   - [Development Dependencies](#23-development-dependencies)
3. [Usage](#3-usage)
   - [Start the Server](#31-start-the-server)
   - [Make HTTP Requests](#32-make-http-requests)
4. [Configuration](#4-configuration)
5. [Status](#5-status)
6. [Requirements](#6-requirements)
7. [FAQ](#7-faq)
8. [Relevant Links](#8-relevant-links)
9. [README Update](#9-readme-update)
10. [Contribution](#10-contribution)
11. [Credits](#11-credits)
12. [License](#12-license)

## 1. Structure

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 2. Installation
### 2.1. Main Dependencies
**Express**

Express is a highly popular and widely used web application framework in the Node.js ecosystem. Express simplifies the creation of web servers and APIs by providing an organized structure for handling routes, HTTP requests, and responses. It facilitates the building of efficient and scalable web applications.

 ```
 npm install express
 ```

**Sequelize**

Sequelize is an Object-Relational Mapping (ORM) library that simplifies interaction with relational databases in Node.js. Sequelize abstracts the complexity of writing SQL queries directly and allows developers to interact with the database through JavaScript models and objects. It makes creating, reading, updating, and deleting data in a SQL database more object-oriented.

 ```
 npm install sequelize
 ```

**mysql2**

Database drivers are necessary for connecting and communicating with a specific database. In the context of Sequelize, you need a compatible database driver for Sequelize to connect to and manage your SQL database. In this case, mysql2 is mentioned because it is commonly used for MySQL databases. Depending on the database you are using (e.g., PostgreSQL, SQLite, etc.), you will need to install the corresponding driver.

 ```
 npm install mysql2
 ```

Estas dependencias son esenciales para construir una aplicación de Node.js que interactúa de manera eficiente con una base de datos SQL utilizando Sequelize y para crear un servidor web o una API utilizando Express. Simplifican el desarrollo al proporcionar herramientas y abstracciones que ahorran tiempo y esfuerzo a los desarrolladores.

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

### 2.2. Secondary Dependencies
Below is a list of dependencies used in this backend project along with a brief explanation of their functionality and how to install them.

1. **axios** (`^1.5.0`): Axios is a library for making HTTP requests in Node.js and the browser. It can be installed with:

 ```
 npm install axios
 ```

2. **bcryptjs** (`^2.4.3`): Bcryptjs is a library for secure password hashing. It can be installed with:

 ```
 npm install bcryptjs
 ```

3. **cors** (`^2.8.5`): Cors is an Express middleware that allows communication between different domains. It can be installed with:

 ```
 npm install cors
 ```

4. **dotenv** (`^16.3.1`): Dotenv is used to load environment variables from a `.env` file. This is useful for storing sensitive configurations. It can be installed with:

 ```
 npm install dotenv
 ```

5. **jsonwebtoken** (`^9.0.2`): Jsonwebtoken is used to generate and verify JSON Web Tokens (JWTs) used in authentication. It can be installed with:

 ```
 npm install jsonwebtoken
 ```

6. **multer** (`^1.4.5-lts.1`): Multer is middleware for handling forms and file uploads in Express. It can be installed with:

 ```
 npm install multer
 ```

7. **nodemailer** (`^6.9.5`): Nodemailer is used to send emails from a Node.js application. It can be installed with:

 ```
 npm install nodemailer
 ```
 
8. **sequelize-cli** (`^6.6.1`): Sequelize CLI is a command-line tool for Sequelize. It can be installed with:

 ```
 npm install sequelize-cli
 ```

9. **swagger-jsdoc** (`^6.2.8`): Swagger JSDoc is used to generate Swagger documentation from JSDoc comments in your code. It can be installed with:

 ```
 npm install swagger-jsdoc
 ```

10. **swagger-ui-express** (`^5.0.0`): Swagger UI Express provides a user interface for exploring and testing generated Swagger documentation. It can be installed with:

 ```
 npm install swagger-ui-express
 ```

11. **tedious** (`^16.4.0`): Tedious is a driver for Microsoft SQL Server in Node.js. It can be installed with:

 ```
 npm install tedious
 ```

12. **uuidv4** (`^6.2.13`): Uuidv4 is used to generate universally unique identifiers (UUIDs) following the UUIDv4 specification. It can be installed with:

 ```
 npm install uuidv4
 ```

13. **ws** (`^8.14.2`): WS provides WebSocket functionality for both client and server in Node.js. It can be installed with:

 ```
 npm install ws
 ```

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

### 2.3 .Development Dependencies
Below is a list of development dependencies used in this project along with a brief explanation of their functionality and how to install them.

1. **eslint** (`^8.49.0`): Eslint is a linting tool that helps maintain clean and consistent JavaScript code. It can be installed with:

 ```
 npm install -d eslint
 ```

2. **jest** (`^29.7.0`): Jest is a unit testing framework for JavaScript. It is used to write and run unit tests for your code. It can be installed with:

 ```
 npm install -d jest
 ```

3. **nodemon** (`^3.0.1`): Nodemon is a tool that watches for changes in your project files and automatically restarts the Node.js server when changes are detected. It can be installed with:

 ```
 npm install -d nodemon
 ```

4. **supertest** (`^6.3.3`): Supertest is a library used for performing integration tests on HTTP/Express applications. It can be installed with:

 ```
 npm install -d supertest
 ```

Make sure to run these commands in your project directory to install the dependencies correctly.

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 3. Usage

Once you have installed the main and secondary dependencies in your project, you can start using the Eventum backend. Here are the basic steps for using it:

### 3.1. Start the Server

To start the Eventum server, you can use the following command:

```
npm start
```

This command will start the server and get it up and running. Make sure the server is running before making any requests.

### 3.2. Make HTTP Requests
The Eventum backend exposes various API endpoints that you can use to interact with the application. Here are some examples of HTTP requests you can make:

#### Get all Events

```
GET http://localhost:3001/events/getall
```

#### Create an Event

```
POST http://localhost:3001/events/create

Body JSON:

{
    "dateTime": 10/12/2023,
    "duration_min": 60,
    "type": "event",
    "banner": "test.jpg",
    "description": "Come see the EDEM musical. Free admission!!!",
    "title": "Musical".
}
```
#### Update an Event

```
PUT http://localhost:3001/events/update/1

Body JSON:

{
    "dateTime": 12/12/2023,
    "duration_min": 90,
    "type": "event",
    "banner": "test.jpg",
    "description": "Come see the EDEM musical. Free admission!!!",
    "title": "Musical".
}
```

#### Delete an Event

```
DELETE http://localhost:3001/events/delete/1
```

If you need more information about the API, feel free to visit our [Postman documentation](https://grey-meadow-86508.postman.co/workspace/poppaBack~40055b61-3f05-4b79-852e-054c752905f0/collection/28231572-60a28a80-ae6a-46a1-a63b-db457685977e?action=share&creator=28231572&active-environment=28231572-0744ac4e-249a-4509-8a21-792b6de4c867).

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>












### Pasos para levantar el backend en la instancia de AWS EC2

Asignar permisos específicos sobre el fichero PEM que está dentro de la carpeta AWS del repositorio:

    chmod 400 dreamteam-eventum-backend.pem

Conectarse a la instancia EC2 ejecutando el siguiente comando sin salir de la carpeta AWS:

    ssh -i "dreamteam-eventum-backend.pem" ubuntu@ec2-44-201-235-108.compute-1.amazonaws.com

Levantar el backend como un proceso demonio con el siguiente comando:

    pm2 start eventum-back/src/index.js

### Configuración de Nginx

Esta configuración es necesaria para que pueda redireccionar tráfico desde fuera (internet) hacia la aplicación de NodeJS que está ejecutando en el puerto específico.

    ubuntu@ip-172-31-85-100:~$ cat /etc/nginx/sites-available/eventum-back.patgonzalez.me
    map $http_upgrade $connection_upgrade {
        default upgrade;
        '' close;
    }

    server {
        server_name eventum-back.patgonzalez.me;

        location / {
            proxy_pass http://localhost:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade;
            proxy_set_header Host $host;
        }
    }
