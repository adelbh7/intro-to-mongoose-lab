const userAction = 0
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
const customerSchema=new mongoose.Schema({
  name:String,
  age:Number
})

const customer=mongoose.model(`customer`,customerSchema)

async function connect (){
await mongoose.connect(process.env.MONGODB_URI);
console.log(`Connected to MongoDB`)
}
connect()

for (i=userAction;i!=5;){

console.log(`Welcome to the CRM ${username}! \n What would you like to do?\n

  1. Create a customer\n
  2. View all customers\n
  3. Update a customer\n
  4. Delete a customer\n
  5. quit`);

userAction = prompt(`Number of action to run (1-5): `)

const mongoose= require (`mongoose`)
const dotenv = require (`dotenv`)

console.log(`Below is a list of customers: \n\n

id: 658226acdcbecfe9b99d5421 --  Name: Matt, Age: 43\n
id: 65825d1ead6cd90c5c430e24 --  Name: Vivienne, Age: 6\n
`)

if(userAction==1){
 console.log(` Add new customer `)
 const cusotmerName= prompt (`Enter the new cusotmer name:`)
 const cusotmerAge= prompt (`Enter the new cusotmer age:`)

}

if(userAction==2){
  console.log(` Viewing updated customers `)
 
 }

 if(userAction==3){
  console.log(` Updating a customer.. Copy and paste the id of the customer you would like to update here: `)
 
 }if(userAction==4){
  console.log(` Delete a customer.. Copy and paste the id of the customer you would like to delete here: `)
 
 }if(userAction==5){
  console.log(` Exiting the application `)
 
 

/* Define the model
Create a new model file and build the customer schema.

The customer model will have the following fields:

name: String
age: Number
*/

/*

Make the database connection
Initialize Mongoose and MongoDB Connection:

Set up Mongoose in your application.
Ensure you have a .env file for your MongoDB URI and a .gitignore file to avoid pushing sensitive data to GitHub.
*/


/*
Developing the user interface
Start by displaying a welcome message to the user
Implement a simple menu system that lets the user choose an action (Create, View, Update, Delete, Quit). Use prompt-sync to get the user’s choice and handle it accordingly.
When figuring out what the user wants to do, it’s probably easiest to prompt them to choose from various options in a numbered list. This way, the user just enters a number and the application knows what to do next.
When dealing with choosing a specific customer to update or delete, it’s probably easiest to list the customers in the database along with their ids. Then prompt the user to enter id of the user that needs to be updated/deleted.
Starting the application
Start your application by running the following command in the terminal:

Copy
node app.js
NOTE: The prompt-sync package, used for user input in the terminal, may not work well with nodemon. To test changes, stop the app using Ctrl+C and restart it with node app.js.

Sample exchange
Use the following example as a guide when designing your application:

Starting the application
Copy
Welcome to the CRM

What would you like to do?

  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. quit

Number of action to run: 
# user inputs 3
Updating a customer
Copy
Below is a list of customers: 

id: 658226acdcbecfe9b99d5421 --  Name: Matt, Age: 43
id: 65825d1ead6cd90c5c430e24 --  Name: Vivienne, Age: 6

Copy and paste the id of the customer you would like to update here: 
# user inputs 658226acdcbecfe9b99d5421

What is the customers new name?
# user inputs Bilbo
What is the customers new age?
# user inputs 50
Choosing next action
Copy
What would you like to do?

  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. Quit

Number of action to run: 
# user inputs 2
Viewing updated customers
Copy
id: 658226acdcbecfe9b99d5421 --  Name: Bilbo, Age: 50
id: 65825d1ead6cd90c5c430e24 --  Name: Vivienne, Age: 6
Choosing next action
Copy
What would you like to do?

  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. Quit

Number of action to run: 
# user inputs 5
Exiting the Application

Copy
exiting...
Exiting the application
When you run your CRM application using node app.js, it starts an active session. For the application to exit cleanly, it is essential to close the MongoDB connection. This prevents potential issues like memory leaks or hanging processes.

When the exit condition is met (e.g., the user selects ‘Quit’), call mongoose.connection.close() in app.js. This command safely closes the connection to your MongoDB database.*/

}