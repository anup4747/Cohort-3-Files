# ORM Project

This is a Node.js project using Sequelize ORM and MySQL. This README will guide you through setting up the project locally.

## Project Setup

### 1. Clone the Repository

First, clone the project repository to your local machine:

```
git clone https://github.com/anup4747/Cohort-3-Files.git
cd ORM
```

Install all packages
``` 
npm install
```

Initialize Sequelize:
``` 
sequelize init
``` 

This command will create the following folders and files in your project:

config/: Contains your database configuration (config.json).

models/: Contains the Sequelize models.

migrations/: Contains your migration files.

seeders/: Contains seed data files.

You need to configure your MySQL database. Update the Sequelize configuration file (config/config.json) with your database details.

Modify the development section
```

{
  "development": {
    "username": "root",
    "password": "password", 
    "database": "your_database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password", 
    "database": "your_database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password", 
    "database": "your_database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

