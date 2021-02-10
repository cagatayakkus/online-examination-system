# Online Examination System

OES is an exam application which is independent from institues.

## Installation

First clone the project. You can use following command on your terminal:

```
git clone https://github.com/cagatayakkus/online-examination-system.git
```

Then, download and install the necessary packages.

```
npm install
```

## Usage

You need to define some configuration values such as **config.json** and **.env** files.

#### into your project_path/config/config.json

```javascript
{
  "development": {
    "username": "YOUR_DB_USERNAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "YOUR_DB_NAME",
    "host": "YOUR_DB_HOST_GENERALLY_localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "YOUR_DB_USERNAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "YOUR_DB_NAME",
    "host": "YOUR_DB_HOST_GENERALLY_localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "YOUR_DB_USERNAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "YOUR_DB_NAME",
    "host": "YOUR_DB_HOST_GENERALLY_localhost",
    "dialect": "postgres"
  }
}
```
### DO NOT FORGET: If you want to change database service you need to re-configure project_path/db/index.js file.


#### into your project_path/.env
```
DB_NAME = YOUR_DB_NAME
DB_USER = YOUR_DB_USERNAME
DB_PASSWORD = YOUR_DB_PASSWORD
DB_HOST = YOUR_DB_HOST_GENERALLY_localhost
```
##
**Thanks for reviewing this project.**