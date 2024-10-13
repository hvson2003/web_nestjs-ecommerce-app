// eslint-disable-next-line @typescript-eslint/no-require-imports
const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.post('http://localhost:3000/auth/register', {
      username: 'username1',
      password: 'password',
      seller: true,
    });
    console.log(data);

    const { token } = data;
    const { data: res2 } = await axios.get('http://localhost:3000/auth', {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(res2);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
})();
