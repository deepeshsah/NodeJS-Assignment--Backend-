# NodeJS-Assignment--Backend-

Node.js CRUD app with functionalities of Add/Update/Delete/Get items from any one of the databases (MongoDB, MySQL, PostgreSQL etc.), implementing the endpoints with proper API documentation (e.g. Swagger), implementing test cases for the components in your project (API, Services) using any testing frameworks (Jest, Mocha, Chai etc.), Dockerizing the solution, and deploying it to some cloud service provider using CI/CD pipeline:

    Set up a new Node.js project with TypeScript:
    
    mkdir my-project
cd my-project
npm init -y
npm install typescript --save-dev
npx tsc --init


    Choose a database and install the appropriate Node.js package to connect to it (e.g. mongoose for MongoDB, sequelize for MySQL/PostgreSQL). Install other required packages such as express, body-parser, and swagger-ui-express.

    Write TypeScript code to create an API with endpoints for adding, updating, deleting, and getting items from the chosen database. For example, i have used MongoDB with mongoose.
    
    Write Swagger documentation in a separate file (e.g. swagger.json) that describes the API endpoints and their parameters/responses.
