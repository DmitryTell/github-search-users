import axios from 'axios';


export const getUsers = async (value: string, order: string, currentPage: number) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${value || 'a'}&sort=repositories&order=${order}&per_page=${20}&page=${currentPage}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        throw new Error('Превышен лимит запросов к серверу, пожалуйста, попробуйте повторить через пару минут');
      } else if (error.response?.status === 422) {
        throw new Error('Введите имя пользователя в поисковую строку');
      } else if (error.response) {
        throw new Error(error.response.statusText);
      } else if (error.request) {
        throw new Error('нет ответа от сервера');
      } else {
        throw new Error(error.message);
      }
    } else {
      throw error;
    }
  }
};
