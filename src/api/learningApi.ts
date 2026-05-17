import axios from 'axios';

const BASE_URL =
  'https://ssc-quiz-backend-lxf3.onrender.com/api';

export const getLearningData =
  async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/learning`,
      );

      return response.data;
    } catch (error) {
      console.log(
        'Learning API Error:',
        error,
      );

      return [];
    }
  };