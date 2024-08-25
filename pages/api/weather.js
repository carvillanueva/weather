// pages/api/weather.js

export default async function handler(req, res) {
    const { city } = req.query; // Get the city name from the query string
    const apiKey = 'YOUR_API_KEY';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    try {
      const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
