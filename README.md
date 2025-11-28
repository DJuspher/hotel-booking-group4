HOTEK BOOKING GROUP 4 MINI CAPSTONE


PROJECT INSTALLATION GUIDE HOTEL BOOKING

PREREQUISITES

1.GIT 

git --version

if not install https://git-scm.com/install/

INSTALLATION STEPS

Step 1 : Create a Project 

mkdir my-project (anyname)
cd my-project 

Step 2 : CLone the Repository

https://github.com/DJuspher/hotel-booking-group4.git

This will create a new folder with client/sever.

Step 3 : Install Clerk 

1. Navigate Client:
cd Client

2.Install dependencies:
npm install @clerk/clerk-react

3.Create a .env file inside client/:
VITE_CLERK_PUBLISHABLE_KEY=pk_test_Z3JlYXQtc3BpZGVyLTI5LmNsZXJrLmFjY291bnRzLmRldiQ

4.Start the client server :
npm run dev


