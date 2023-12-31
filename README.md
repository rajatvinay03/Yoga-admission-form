# Yoga Class Application Form

Welcome to the Yoga Class Admission Form project! This application allows individuals to enroll in monthly yoga classes and manage their class preferences.
Link - https://yoga-nxpi.onrender.com

# Getting Started

## Prerequisites

Before proceeding, ensure that you have the following installed on your machine:

- Node.js
- MongoDB

To get started with the application, follow these steps:

1. Clone the Repository:
   ```bash
   git clone https://github.com/rajatvinay03/Yoga-admission-form/
   ```

2. Install Dependencies:
   ```bash
   cd Yoga-admission-form
   npm install
   ```
   
3. Additional(to run this locally):
   -For frontend
   ```bash
   npm start
   ```
   -For backend
   ```bash
   cd yoga-admission-backend
   npm run dev
   ```
   
   This will start the Node.js application on the specified port (3000 in this case-Frontend and 3001 in Backend).

## Entities and MetaData
---
1. User:
   - **UserId**: Unique identifier for the User.
   - **Name**: Name or title of the User.
   - **Age**: Age of the User.
   - *Other relevant question metadata*.

2. Batch:
   - **BatchID**: Unique identifier for the Batch.
   - **BatchTiming**: Timing of the particular batch.
   -  *Other relevant question metadata*.

3. Payment:
   - **PaymentID**: Unique identifier for the payment.
   - **PaymentDate**: On which date the payment was made.
   - **Amount**: How much amount was paid.
   - *Other relevant question metadata*.
---
## E-R Diagram

The E-R Diagram illustrates the relationship between the entities and their metadata:

```
+-------------------+         +-------------------+         +--------------------+
|       User        |         |       Batch       |         |     Payment        |    
+-------------------+         +-------------------+         +--------------------+
| UserID            |1      1 | BatchID           |         | PaymentID          |
| Name              |---------| BatchTiming       |         | PaymentDate        | 
| Age               |         | ---               |         | Amount             | 
| ---               |         |                   |         | ---                |
+-------------------+         +-------------------+         +--------------------+
         | 1                                                        1 |  
         --------------------------------------------------------------
```

The schematic design showcases the relationships between the entities:
- Each User can have a single Batch (one-to-one relationship).
- Each User will pay a single time in each month (one-to-one relationship).

## Folder Structure

The folder structure of the project is as follows:
```
yoga-admission-form
├── public
├── src
│   ├── components
│   ├── ├── ApplicationForm.js
│   ├── ├── ApplicationForm.css
│   ├── services
│   ├── ├── api.js
│   ├── App.css
│   └── App.js
|   |__ Index.js
├── yoga-admission-backend
│   ├── models
│   ├── ├── User.js
│   ├── routes
│   ├── ├── enrollment.js
│   ├── package-lock.json
│   └── package.json
|   |__ server.js
├── package-lock.json
└── package.json


- The `components` folder contains React components, such as the AdmissionForm .
- The `services` folder contains service files, like API communication .
- The `models` folder contains the model files representing the different entities in the system .
- The `routes` folder contains the specific route files for each entity, defining the API endpoints(backend).
- The `package.json` and package-lock.json files contain the project dependencies.
```
## TODO(Future Work)

1.The application includes a mock payment function named CompletePayment(). This function accepts the details of the user and payment and simulates the payment 
 process. You don't need to implement this function as it is a placeholder for future payment functionality.We can integrate this with razorpay to make the payments 
 more seamless and multiple options of payments can be provided viz. UPI, card, NEFT, etc.

2.We can also notify the user by adding an additional field of email to send them regular updates of the classes, which can be done using Kafka message queue.

## Scalibilty
The scaling of the project can be done in various ways . For that reason I have not used a relational database for flexibility purpose.Designing the system with scalability in mind, such as using microservices, serverless, or containerized architectures.Use load balancing to distribute incoming requests across multiple backend servers.Implement caching strategies at various levels (e.g., database caching, HTTP caching) to reduce redundant computations.
