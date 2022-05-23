# ClientGoals
    - The Project is bootstrapped with React JS and Backned web api using C# & EF code First and along side sqlite browser. 
 # Status
    - NOTE: App is build with mainly focused on Backend and Front end patterns/usage and concepts. And not much focused on styling part. Part of the known issues like 
        - loader not implemented.
        - Time did not permit to add Test case for coverage 
## Pre-requisites

- Windows
    - Visual Studio 2022 (v17.2.1)
    - [.NET Core SDK version 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0 "Download .NET Core 6")
    - Visual Studio code
    - Entity Framework core 6
    - Repository pattern 

- Front End
    - React JS 16.12.0
    - Node v14.18.0
    - npm 6.14.15
    - Redux
    - FE middlewear - Redux Saga
    - Fetch for the API call 

- Database
    - Microsoft SQLite Browser [https://sqlitebrowser.org/dl/ - 64 bit]
## Overview

This is the web application in new app built using .NET 6 web api with EntityFramework core 6.0 and Front end with React JS and Redux & Redux-Saga . It has build for one-to-many relationship b/w clients and goals database schema:

## Local development setup
    - Application mocked with sample data in middlewear using MS sqlite browser to create a seed and database migration
    - Application build with .NET 6 (latest version) - all the Back End middlewear from Starup.cs is now configured withing Program.cs (new     pattern from Microsoft) includes service registration and app containers. 

### Api.Client 
### ASP.NET application
- Swagger integration is done for all the routes.
- RESTPattern principles for the api design
- Database schema includes 2 tables with "Client" & "Goal" table that has one-to-many relationship 

Front-end
- Build frontend `npm run build`
- Run Api.Clients app with Visual Studio & VS code 
- Access the BE app with https://localhost:7156/index.html -for swagger UI 
- npm start run -  launch front end http://localhost:3000 browser

### Razor client application

The Razer client application component of the project is located in the `Api.Clients/client-app` directory. All of the following commands should be executed in this directory.
- Run `npm install` to setup the client application by downloading the referenced npm packages.
- Run `npm run build` to build the client components.
- Run `npm run start` to launch the client application.