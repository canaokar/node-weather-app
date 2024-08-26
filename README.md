# Weather API Application

This project demonstrates a simple Node.js application that fetches weather data from the OpenWeatherMap API based on latitude and longitude provided via query parameters. The application uses the Express framework for handling HTTP requests and Axios for making HTTP requests to the weather API.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Project Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/canaokar/node-weather-app.git
   cd node-weather-app
   ```

2. **Install Dependencies:**

   Use npm to install the required packages.

   ```bash
   npm install
   ```

3. **Set the API Key:**

   Open the `app.js` file and replace `YOUR_API_KEY_HERE` with your actual OpenWeatherMap API key.

   ```javascript
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

   Ensure that you have an API key from [OpenWeatherMap](https://openweathermap.org/api).

## Running the Application

1. **Start the Server:**

   Run the application using Node.js:

   ```bash
   node app.js
   ```

   The server will start on port 3000.

2. **API Endpoints:**

   - **Fetch Basic Weather Data:**

     ```bash
     GET /weather
     ```

     Query parameters:
     - `lat`: Latitude of the location.
     - `lon`: Longitude of the location.

     Example:

     ```
     http://localhost:3000/weather?lat=40.7128&lon=-74.0060
     ```

     Response:

     ```json
     {
       "name": "New York",
       "temp": 25.32,
       "description": "clear sky",
       "humidity": 60
     }
     ```

   - **Fetch Detailed Weather Data:**

     ```bash
     GET /api/weather
     ```

     Query parameters:
     - `lat`: Latitude of the location.
     - `lon`: Longitude of the location.

     Example:

     ```
     http://localhost:3000/api/weather?lat=40.7128&lon=-74.0060
     ```

     Response:

     ```json
     {
       "name": "New York",
       "temp": 25.32,
       "description": "clear sky",
       "humidity": 60,
       "wind_speed": 5.1,
       "country": "US",
       "coordinates": {
           "lat": 40.7128,
           "lon": -74.006
       }
     }
     ```

## Code Overview

### `app.js`

This is the main file that sets up the Express server and defines the routes.

- **Express Setup:** The application is built using the Express framework, which simplifies the creation of server-side applications in Node.js.
- **Axios:** Axios is used to make HTTP requests to the OpenWeatherMap API.
- **Routes:**
  - **`/weather`:** Fetches basic weather data (city name, temperature, weather description, and humidity).
  - **`/api/weather`:** Fetches detailed weather data, including wind speed, country, and coordinates.

### Project Structure

```bash
.
├── app.js       # Main application file
├── package.json # Project metadata and dependencies
└── README.md    # Project documentation
```
