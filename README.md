# SensorTech Beers App

This React application fetches temperature data for different types of beers and displays them in a table. It also provides real-time updates every 5 seconds.

## Highlights of Improvements

1. **Test Coverage:** The test suite has been expanded to cover various aspects of the application, including rendering, data fetching, and timer-based updates.

2. **Error Handling:** Tests now cover scenarios where data fetching encounters errors, ensuring the application gracefully handles such situations.

3. **List Rendering:** The tests now verify the correct rendering of the beer list, including the number of items and the display of relevant data.

4. **Timer Updates:** A test has been added to ensure the component updates the list after 5 seconds, simulating the real-time aspect of the application.

## How to Run

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/sensortech-beers-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd sensortech-beers-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npm start
    ```

5. Run tests:

    ```bash
    npm test
    ```

## What Would You Improve Next?

Given more time, the following improvements could be considered:

- **Component Decomposition:** Break down the `App` component into smaller, reusable components for better maintainability and testability.

- **Mocking Fetch Calls:** Enhance the fetch mocking strategy to simulate different scenarios, such as network delays or partial data.

- **Test Refactoring:** Refactor tests to enhance readability and maintainability, considering the use of custom test utilities or helper functions.

## Questions and Assumptions

**Q: Why mock the fetch function globally?**
A: Mocking `fetch` globally ensures consistent behavior across tests, allowing us to control and observe network requests without making actual HTTP calls.

**Q: What if the fetch response structure changes?**
A: The tests assume a certain response structure. If the API response structure changes, tests will need to be updated accordingly.

## Decisions and Approaches

- **Test Structure:** Tests are organized based on specific functionalities, making it easier to understand and maintain.

- **Error Handling:** Tests cover scenarios where the API responds with errors, ensuring the application handles such cases gracefully.

- **Data Mocking:** Mock data is used to simulate API responses, ensuring predictable and controlled testing scenarios.

## Notes

- The application relies on a simulated API (`http://localhost:8081/temperature/:id`). Ensure the API is accessible and responds as expected during testing.

- This README assumes familiarity with React, npm, and Jest testing library.
