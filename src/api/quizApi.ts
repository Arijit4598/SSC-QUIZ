import axios from 'axios';

const BASE_URL =
  'https://ssc-quiz-backend-lxf3.onrender.com/api';

export const getQuestionsBySubject =
  async (subject: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/questions/${subject}`,
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return [];
    }
  };