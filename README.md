# Bug Tracker
This is a system designed to be implemented in a web app for users to create bug reports, check the status of their report, as well as edit or delete them (Full CRUD).
## Wireframes
### User Interface
![User Submussion Wireframes](./etc/images/Wireframe1.png)
### Admin Interface
![Admin Wireframes](./etc/images/Wireframe2.png)
### User Status Checking
![Status Wireframe](./etc/images/Wireframe3.png)

## MVP

To reach MVP, this project will need:

 - The ability for a user to submit issues
 - The ability for a user to view their issue status
 - The ability for a user to update and delete their report
 - A database for containing issues and related properties

 ### RESTful Routing and ERD Chart

 ![RESTful Routing and ERD Chart](./etc/images/ERD-REST.png)
 Please note that all admin related features (red) represent a stretch goal.

## Stretch Goals

If time permits it, I would like to add:

 - Admin interaction with bugs
 - Admin indexing and viewing issues
 - Admin responding, closing, and deleting of reports
 - A responsive design
 - Ability to set priority of issues as an admin, and sort by it
 - A system for users to track submitted issues
 - Display of user OAuth profiles in admin view

## Tech Stack

 - HTML, CSS, JS
 - Node.js, Express.js, OAuth, MongoDB, Mongoose
 - VSCodium


## Potential Roadblocks
The biggest difficulties in this project are likely to be:

 - Differentiation of users and admins
 - Implementation of OAuth
 - Interaction between database documents
