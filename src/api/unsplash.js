import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID LK0q0XlWTO5gz4p3YZPAz9ViSIQ2YWCHnydRuJn3qYY',
  },
});
