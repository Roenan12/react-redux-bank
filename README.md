# React Redux Bank

This project, **react-redux-bank**, was created as a learning tool to understand and implement modern Redux and Redux Toolkit concepts, including thunks for asynchronous operations. The main goal of this project is to learn the best practices in using Redux for state management in a React application, including creating slices, working with thunks, and using professional Redux architecture.

## Features

1. **Create Bank Account**: Users can create a bank account with their national ID.
2. **Deposit Money**: Users can deposit money in three currencies (USD, EUR, GBP). Currency conversion rates are fetched from the [Frankfurter API](https://www.frankfurter.app/docs/) to convert the selected currency to USD.
3. **Withdraw Money**: Users can withdraw money from their account.
4. **Loan Management**: Users can request loans and pay them back.
5. **Account Management**: Users can view their current balance and update their account name.

## Key Concepts Learned

- **Redux Store**: Centralized state management for the application using Redux.
- **Action Creators**: Functions to create actions in a clean and maintainable way.
- **Professional Redux File Structure**: Organized state into slices using the Redux Toolkit for cleaner code and better scalability.
- **useDispatch and useSelector**: Modern React hooks to dispatch actions and access the state from the Redux store.
- **Redux-logger**: Middleware used to log actions and state changes for easier debugging.
- **Legacy Redux**: Explored how to connect components to Redux using the old `connect` method as a comparison to modern hooks.
- **Redux Thunks**: Handling async logic and API calls via middleware, demonstrated with real-world currency conversion.
- **Redux DevTools**: Used for tracking and debugging state changes in the app.
- **Redux Toolkit**: Simplified store setup, createSlice, and thunks management.

## Technologies Used

- **Create React App**: Used to set up a React project.
- **Redux**: State management library.
- **Redux**: State management library.
- **Redux Toolkit**: A set of tools to simplify Redux logic and best practices.
- **Redux Thunk**: Middleware to handle asynchronous logic.
- **Redux Logger**: Middleware for logging Redux actions and state changes.
- **Frankfurter API**: Used for currency conversion between USD, EUR, and GBP.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-redux-bank.git
   cd react-redux-bank
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run the app
   ```
   npm start
   ```
4. Open the app in your browser at `http://localhost:3000`.

## Future Improvements

- Add more currencies for deposit and withdrawal.
- Add account history and transaction records.
- Implement account security features such as authentication and authorization.
    
## Acknowledgements

This app was developed as part of the [Udemy course](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schmedtmann. Special thanks to Jonas for his excellent teaching and guidance throughout the course.
