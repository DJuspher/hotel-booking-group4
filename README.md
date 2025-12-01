HOTEL BOOKING — GROUP 4 MINI CAPSTONE
Project Installation Guide
🔧 Prerequisites
1. Git

Check if Git is installed:

git --version


If not installed, download here:
https://git-scm.com/install/

📥 Installation Steps
Step 1: Create a Project Directory
mkdir my-project   # or any folder name you prefer
cd my-project

Step 2: Clone the Repository
git clone https://github.com/DJuspher/hotel-booking-group4.git


This will create a new directory containing client and server folders.

🔐 Step 3: Install Clerk (Client Setup)
1. Navigate to the Client Folder:
cd hotel-booking-group4/client

2. Install Clerk Dependency:
npm install @clerk/clerk-react

3. Create a .env File Inside /client:

Add the following key:

VITE_CLERK_PUBLISHABLE_KEY=pk_test_Z3JlYXQtc3BpZGVyLTI5LmNsZXJrLmFjY291bnRzLmRldiQ

4. Start the Client Development Server:
npm run dev
