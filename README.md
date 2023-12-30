# TODO List - Distributed App

## Overview

This repository contains the source code for a FullStack Application.
The RESTful API backend made with NestJS manages a list of TODO items and interacts with a MySQL Database. The API provides endpoints for listing, creating, updating, and deleting TODO items.
The Web Frontend is made with Angular.

## API Endpoints

### Get All TODO Items

- **URL:** `/todos`
- **HTTP Method:** GET
- **Description:** Retrieve a list of all TODO items.

### Create TODO Item

- **URL:** `/todos`
- **HTTP Method:** POST
- **Description:** HTTP Call to create a new Todo item with todo in the body e.g. { "todo_task": "Do something" } .

### Update TODO Item

- **URL:** `/todos/{id}`
- **HTTP Method:** PUT
- **Description:** Update an existing TODO item with the specified ID by sending the new task in the body of the call. Call Example: { "todo_task": "Do some more" } .

### Delete TODO Item

- **URL:** `/todos/{id}`
- **HTTP Method:** DELETE
- **Description:** Delete a TODO item with the specified ID.

## Data Model

The API uses a data model for TODO items with the following attributes:

- `id` (Integer): The unique identifier of the TODO item.

## Prerequisites

## Running the Application

To run the application, follow these steps:

1. Clone this repository to your local machine.
2. Build and run the project using a IDE or the command line.

### Configuration

You can configure the application by modifying the application properties or configuration files as needed.

## Usage
To run the application and its associated MySQL database using Docker Compose, follow these steps:

1. Clone this repository to your local machine.
2. Make sure you have Docker and Docker Compose installed.

3. Navigate to the root directory of the cloned repository where the `docker-compose.yml` file is located.

4. Open a terminal or command prompt.

5. Run the following command to start the services defined in the `docker-compose.yml` file:

   ```bash
   docker-compose up -d

6. The Frontend will be available to interact at `localhost:4200`.

## Ports
- `4200` - Angular Frontend
- `3000` - NestJS Backend
- `3306` - MySQL Database
