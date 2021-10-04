import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDdhNDZiZjVmZTk3YTc0OTkyNDE1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzM3MTY2NywiZXhwIjoxNjMzNjMwODY3fQ.DkTWn1AcHGNKdT3XExy2GpxjkCVU8lUL6o56AAdifmo';

export const publicRequest = axios.create({
  baseURL: BASE_URL
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {token: `Bearer ${TOKEN}`}
});
