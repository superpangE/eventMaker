const API = {
  get: async (path) => {
    const URL = `http://localhost:3000${path}`;
    const response = await fetch(URL, {
      method: 'get',
    });
    const result = await response.json();
    return result;
  },
  post: async (path, payload) => {
    const URL = `http://localhost:3000${path}`;
    const response = await fetch(URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const Result = await response.json();
    return Result;
  },
};

export default API;
