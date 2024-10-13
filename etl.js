// eslint-disable-next-line @typescript-eslint/no-require-imports
const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.post('http://localhost:3000/auth/login', {
      username: 'username',
      password: 'password',
    });

    console.log(data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
})();
